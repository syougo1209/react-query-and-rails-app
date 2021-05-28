module Api
  module V1
    class SessionLoginsController < ApplicationController
      include LoginActions
      before_action :restrict_to_logged_in_user, only: %i[destroy]

      def create
        user = User.find_by(email: session_login_params[:email])
        return render_401_error unless user&.authenticate(session_login_params[:password])

        login(user)
        render json: {userId: user.id}, status: :ok
      end

      def destroy
        logout
        render json: {}, status: :ok
      end

      def current_user_id
        return render json: { userId: session[:user_id] }, status: :ok if session[:user_id].present?

        render json: { userId: nil }, status: :ok
      end

      private

      def session_login_params
        params.require(:session_login).permit(:email, :password)
      end
    end
  end
end
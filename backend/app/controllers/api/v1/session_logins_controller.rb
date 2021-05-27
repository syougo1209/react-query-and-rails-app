module Api
  module V1
    class SessionLoginsController < ApplicationController

      def create
        user = User.where(email: params[:email])
      end

      def destroy
      end

      def current_user_id
        return render json: { userId: session[:user_id] }, status: :ok if session[:user_id]

        render json: { userId: nil }, status: :ok
      end

      private

      def session_login_params
        params.require(:session_login).permit(:email, :password)
      end
    end
  end
end
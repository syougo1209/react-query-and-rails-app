module Api
  module V1
    class UsersController < ApplicationController
      def create
        user=User.new(user_params)
        return render json: {}, status: :internal_server_error unless user.valid?

        user.save!
        render json: {}, status: :created
      end

      def recommended_categories_users
        render json: { users: User.all}, status: :ok
      end

      private

      def user_params
        params.require(:user).permit(:name, :password, :email)
      end
    end
  end
end
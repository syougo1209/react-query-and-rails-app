module Api
  module V1
    class UsersController < ApplicationController
      include LoginActions
      def create
        user=User.new(user_params)
        return response_400 if user.invalid?

        user.save!
        login(user)
        render json: {user_id: user.id}, status: :created
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
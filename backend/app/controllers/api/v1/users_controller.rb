module Api
  module V1
    class UsersController < ApplicationController
      def recommended_categories_users
        render json: { users: User.all}
      end
    end
  end
end
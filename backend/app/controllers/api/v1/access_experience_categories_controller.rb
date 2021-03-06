module Api
  module V1
    class AccessExperienceCategoriesController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]
      #todo 共通化
      def create
        experience=Experience.find_by(id: access_experience_category_params[:experienceId])
        return response_404 if experience.blank?

        categories=experience.categories

        is_succeeded=UpdateAccessCategoryService.call(categories: categories, user: current_user)

        is_succeeded ? render(json: {}, status: :created) : response_400
      end

      private

      def access_experience_category_params
        params.require(:access_experience_category).permit(:experienceId)
      end
    end
  end
end
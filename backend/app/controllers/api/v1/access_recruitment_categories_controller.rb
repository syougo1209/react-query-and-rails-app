module Api
  module V1
    class AccessRecruitmentCategoriesController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]
      #todo 共通化
      def create
        recruitment=Recruitment.find_by(id: access_recruitment_category_params[:recruitmentId])
        return response_404 if recruitment.blank?

        categories=recruitment.categories

        is_succeeded=UpdateAccessCategoryService.call(categories: categories, user: current_user)

        is_succeeded ? render(json: {}, status: :created) : response_400
      end

      private

      def access_recruitment_category_params
        params.require(:access_recruitment_category).permit(:recruitmentId)
      end
    end
  end
end
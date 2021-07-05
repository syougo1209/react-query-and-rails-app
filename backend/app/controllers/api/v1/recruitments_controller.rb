module Api
  module V1
    class RecruitmentsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create recommended_recruitments]
      def create
        recruitment=current_user.create_recruitment(recruitment_params)

        recruitment.present? ? render(json: {}, status: :created) : response_400
      end

      def recommended_recruitments
        limit=6
        category_ids=current_user.today_recommended_categories.limit(limit).pluck(:id)
        return render json: {}, status: :ok if category_ids.blank?

        recruitments=current_user.today_recommended_recruitments(category_ids: category_ids, limit: limit)
        response_404 if recruitments.blank?

        render json: {recruitments: recruitments}, status: :ok
      end

      private

      def recruitment_params
        params.require(:recruitment).permit(:title, :content, :categoryId, :recruitmentType)
      end
    end
  end
end
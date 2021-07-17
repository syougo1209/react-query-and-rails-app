module Api
  module V1
    class RecruitmentsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create recommended_recruitments]

      def show
        @recruitment=Recruitment.find_by(id: params[:id])

        return response_404 unless @recruitment

        return response_404 if @recruitment.finished? || @recruitment.discarded?

        render 'show', formats: :json, handlers: 'jbuilder', status: :ok
      end

      def create
        recruitment=current_user.create_recruitment(recruitment_params)

        recruitment.present? ? render(json: {}, status: :created) : response_400
      end

      #todo なければ404や[]ではなく他のものを返す
      def recommended_recruitments
        limit=6
        category_ids=current_user.today_recommended_categories.limit(limit).pluck(:id).uniq
        return render json: [], status: :ok if category_ids.blank?

        @recruitments=current_user.today_recommended_recruitments(category_ids: category_ids, limit: limit)

        return response_404 if @recruitments.blank?

        render 'recommended_recruitments', formats: :json, handlers: 'jbuilder', status: :ok
      end

      private

      def recruitment_params
        params.require(:recruitment).permit(:title, :content, :categoryId, :recruitmentType)
      end
    end
  end
end
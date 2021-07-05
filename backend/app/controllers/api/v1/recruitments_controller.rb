module Api
  module V1
    class RecruitmentsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]
      def create
        recruitment=current_user.create_recruitment(recruitment_params)

        recruitment.present? ? render(json: {}, status: :created) : response_400
      end

      private

      def recruitment_params
        params.require(:recruitment).permit(:title, :content, :categoryId, :recruitmentType)
      end
    end
  end
end
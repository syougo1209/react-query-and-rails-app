module Api
  module V1
    class ExperiencesController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]

      def create
        experience= expericne_create

        if experience.present?
          render json: {}, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      def recommended_categories_experiences
        render json: { experiences: Experience.all}
      end

      private

      def experience_params
        params.require(:experience).permit(:title, :content, :categoryId)
      end

      def experience_create
        ActiveRecord::Base.transaction do
          experience = Experience.create!(title: experience_params.slice(:title), content: experience_params.slice(:title), user_id: current_user.id)
          ExperienceCategory.create!(experience_id: experience.id, category_id: experience_params.slice(:categoryId))

          experience
        end
      end
    end
  end
end
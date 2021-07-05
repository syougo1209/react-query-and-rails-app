module Api
  module V1
    class ExperiencesController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]

      def create
        experience= current_user.create_experience(experience_params)

        experience.present?  ? render(json: {}, status: :created) : response_400
      end

      def show
        experience=Experience.find_by(id: params[:id])
        return response_404 if experience.blank?

        render json: {experience: experience.as_json(include: :user)}, status: :ok
      end

      def recommended_categories_experiences
        render json: { experiences: Experience.all}
      end

      private

      def experience_params
        params.require(:experience).permit(:title, :content, :categoryId)
      end

      def response_201
        render json: {}, status: :created
      end
    end
  end
end
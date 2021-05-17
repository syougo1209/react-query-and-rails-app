module Api
  module V1
    class ExperiencesController < ApplicationController
      def recommended_categories_experiences
        render json: { experiences: Experience.all}
      end
    end
  end
end
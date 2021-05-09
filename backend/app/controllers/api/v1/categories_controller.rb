module Api
  module V1
    class CategoriesController < ApplicationController
      def recommended_categories
        render json: { categories: Category.all}
      end
    end
  end
end
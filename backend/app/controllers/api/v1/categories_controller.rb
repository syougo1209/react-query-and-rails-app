module Api
  module V1
    class CategoriesController < ApplicationController
      def recommended_categories
        render json: { categories: Category.all}, status: :ok
      end
    end
  end
end
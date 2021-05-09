Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories do
        collection do
          get :recommended_categories
        end
      end

      resources :experiences do
        collection do
          get :recommended_categories_experiences
        end
      end

      resources :users do
        collection do
          get :recommended_categories_users
        end
      end
    end
  end
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :access_experience_categories, only: [:create] do
      end
      resources :categories do
        collection do
          get :recommended_categories
        end
      end

      resources :experiences, only: [:create, :show] do
        collection do
          get :recommended_categories_experiences
        end
      end

      resources :users, only: [:create] do
        collection do
          get :recommended_categories_users
        end
      end

      resources :recruitments, only: [:create, :destroy, :show] do
        collection do
          get :recommended_recruitments
        end
      end

      resources :session_logins, only: [:create, :destroy] do
        collection do
          get :current_user_id
        end
      end
    end
  end
end

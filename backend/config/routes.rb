Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :access_experience_categories, only: [:create]
      resources :access_recruitment_categories, only: [:create]

      resources :categories do
        collection do
          get :recommended_categories
        end
      end

      resources :chat_rooms, only: [:show] do
        member do
          get :messages
        end
      end

      resources :experiences, only: [:create, :show] do
        collection do
          get :recommended_categories_experiences
        end
      end

      resources :messages, only: [:create]

      resources :users, only: [:create] do
        collection do
          get :recommended_categories_users
        end
      end

      resources :recruitments, only: [:create, :destroy, :show] do
        collection do
          get :recommended_recruitments
        end
        resources :recruitment_chat_starts, only: [:create] do
          collection do
            post :confirm
          end
        end
        resources :recruitment_chat_requests, only: [:create] do
          collection do
            post :confirm
          end
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

Rails.application.routes.draw do
  namespace :api do
    resources :recipes
    resources :users
    resources :ingredients, only: [:index]
  end
end

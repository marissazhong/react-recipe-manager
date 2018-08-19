Rails.application.routes.draw do
  namespace :api do
    resources :recipes
    resources :ingredients, only: [:index]
  end
end

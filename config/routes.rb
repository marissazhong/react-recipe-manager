Rails.application.routes.draw do
  resources :recipes
  resources :users, only: [:new, :create, :edit, :update, :destroy]
  resources :users, only: [:show] do
    resources :recipes, only: [:show, :index, :new, :create]
  end
  resources :ingredients, only: [:index]
end

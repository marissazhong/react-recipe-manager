Rails.application.routes.draw do
  namespace :api do
    resources :recipes
    resources :ingredients, only: [:index]
    put '/recipes/:id/likes', to: 'recipes#update_likes'
  end
end

module Api
class IngredientsController < ApplicationController

    def index
        @ingredients = Ingredient.all
        render json: @ingredients
    end

    def create
        @ingredient = Ingredient.create(name: params[:name])
    end
    
end
end

class RecipesController < ApplicationController

    def allrecipes
        @recipes=Recipe.all
        render json: @recipes, status: 201
    end

end

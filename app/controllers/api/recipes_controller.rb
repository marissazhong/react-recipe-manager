module Api
class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show, :edit, :update, :update_likes, :destroy]
    before_action :parse_params, only: [:create, :update]

    def index
        @recipes = Recipe.all
        render json: @recipes, status: 201
    end

    def show
        render json: @recipe, status: 201
    end

    def create
        @recipe = Recipe.new(@input)
        @recipe.user_id = User.find_by(username: "marissa").id
        @recipe.save
        render json: @recipe, status: 201
    end

    def update
        @recipe.update(@input)
        @recipe.save
        render json: @recipe, status: 201
    end

    def update_likes
        input = params[:likes]
        input = parseInt(input) if input.is_a?(String)
        @recipe.likes = input
        @recipe.save
        render json: @recipe, status: 201
    end

    def destroy
        @recipe.destroy
        render json: "Recipe successfully deleted"
    end

    private

        def parse_params
            @input = recipe_params
            @input = JSON.parse(recipe_params) if @input.is_a?(String)
        end

        def recipe_params
            params.require(:recipe).permit(:name, :prep_time, :cook_time, ingredients_recipes_attributes: [:name, :quantity], directions: [])
        end

end
end
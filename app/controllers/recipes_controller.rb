class RecipesController < ApplicationController

    # index page showing user's recipes and all recipes
    def index
        @recipes = Recipe.all
        render json: @recipes, status: 201
    end

    # shows individual recipe
    def show
        respond_to do |format|
            format.html { render :show }
            format.json { render json: @recipe }
        end
    end

    # creates new recipe
    def create
        @recipe = @user.recipes.build(recipe_params)
        @recipe.directions = params[:recipe][:directions].values.delete_if {|v| v.empty?}
        if @recipe.save
            #redirect_to recipe_path(@recipe)
            render json: @recipe, status: 201
        else
            render :new
        end

    end


    # updates recipe
    def update
        @recipe.update(recipe_params)
        @recipe.directions = params[:recipe][:directions].values.delete_if {|v| v.empty?}
        if @recipe.save
            redirect_to recipe_path(@recipe)
        else
            render :edit
        end
    end

    # deletes recipe
    def destroy
        @recipe.destroy
        redirect_to user_path(@user)
    end

    private

        def recipe_params
            params.require(:recipe).permit(:name, :prep_time, :cook_time, ingredients_recipes_attributes: [:name, :quantity])
        end

end

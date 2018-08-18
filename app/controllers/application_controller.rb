class ApplicationController < ActionController::Base

    private

    def set_recipe
        @recipe = Recipe.find(params[:id])
    end

end

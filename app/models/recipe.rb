class Recipe < ActiveRecord::Base
    has_many :ingredients_recipes
    has_many :ingredients, :through => :ingredients_recipes
    belongs_to :user
    accepts_nested_attributes_for :ingredients_recipes

    def ingredients_recipes_attributes=(ingredients_recipes_attributes)
        if self.ingredients_recipes
            IngredientsRecipe.where(recipe_id: self.id).delete_all
        end
        ingredients_recipes_attributes.each do |v|
            if !v["name"].empty? && !v["quantity"].empty?
                ingredient = Ingredient.find_or_create_by(name: v["name"].downcase)
                self.ingredients_recipes.build(ingredient_id: ingredient.id, recipe_id: self.id, name: v["name"], quantity: v["quantity"])
            end
        end
    end
    
end
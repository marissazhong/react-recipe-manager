class IngredientsRecipeSerializer < ActiveModel::Serializer
  attributes :ingredient_id, :recipe_id, :name, :quantity
  belongs_to :recipe
end

class AddLikesToRecipe < ActiveRecord::Migration[5.1]
    def change
        add_column :recipes, :likes, :integer
    end
end
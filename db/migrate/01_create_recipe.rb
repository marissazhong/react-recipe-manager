class CreateRecipe < ActiveRecord::Migration[5.1]
    def change
        create_table :recipes do |t|
            t.string :name
            t.integer :userId
            t.integer :prepTime
            t.integer :cookTime
            t.string :directions
            t.string :ingredients
        end
    end
end
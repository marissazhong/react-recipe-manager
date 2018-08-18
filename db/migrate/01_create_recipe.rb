class CreateRecipe < ActiveRecord::Migration[5.1]
    def change
        create_table :recipes do |t|
            t.string :name
            t.text :directions
            t.integer :prep_time
            t.integer :cook_time
            t.integer :user_id
        end
    end
end
  
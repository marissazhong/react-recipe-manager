class CreateIngredient < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.string :name
    end
  end
end

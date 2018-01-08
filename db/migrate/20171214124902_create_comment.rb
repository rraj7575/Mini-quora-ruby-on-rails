class CreateComment < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :commented_text
      t.references :user, index: true
      t.references :answer, index: true
      t.timestamps
    end
  end
end

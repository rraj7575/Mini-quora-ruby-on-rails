class RemoveLastNameFromUsers < ActiveRecord::Migration[5.1]

  def up
    remove_column :users, :last_name
  end

  def down
    add_column :users, :last_name, :string
  end
end

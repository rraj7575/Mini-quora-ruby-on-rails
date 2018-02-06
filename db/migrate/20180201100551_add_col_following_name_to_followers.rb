class AddColFollowingNameToFollowers < ActiveRecord::Migration[5.1]
  def change
    add_column :followers, :following_name, :string
  end
end

class RenameColNameToFollowerNameInFollower < ActiveRecord::Migration[5.1]
  def change
    rename_column :followers, :name, :follower_name
  end
end

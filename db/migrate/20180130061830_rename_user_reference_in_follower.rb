class RenameUserReferenceInFollower < ActiveRecord::Migration[5.1]
  def change
    remove_column :followers, :follower_id
  end
end

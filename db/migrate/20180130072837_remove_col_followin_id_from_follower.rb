class RemoveColFollowinIdFromFollower < ActiveRecord::Migration[5.1]
  def change
    remove_column :followers, :following_id ,:string
  end
end

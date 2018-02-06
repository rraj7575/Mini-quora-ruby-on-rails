class AddColFollowingIdToFollower < ActiveRecord::Migration[5.1]
  def change
    add_column :followers, :following_id, :string
  end
end

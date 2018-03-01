class AddFollowersReferenceToUser < ActiveRecord::Migration[5.1]
  def change
    add_reference :followers, :user, index: true
  end
end

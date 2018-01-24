class CreateFollower < ActiveRecord::Migration[5.1]
  def change
    create_table :followers do |t|
      t.string :name
      t.integer :follower_id
      t.integer :following_id
      # t.references :user, index: true
      t.timestamps
    end
  end
end

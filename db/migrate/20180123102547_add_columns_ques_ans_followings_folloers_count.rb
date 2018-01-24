class AddColumnsQuesAnsFollowingsFolloersCount < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :followers_count, :integer, :default => 0
    add_column :users, :following_count, :integer, :default => 0
    add_column :users, :questions_count, :integer, :default => 0
    add_column :users, :answers_count, :integer, :default => 0
  end
end

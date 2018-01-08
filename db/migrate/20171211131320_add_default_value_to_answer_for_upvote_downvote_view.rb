class AddDefaultValueToAnswerForUpvoteDownvoteView < ActiveRecord::Migration[5.1]
  def change
    change_column_default :answers, :upvate, 0
    change_column_default :answers, :downvote, 0
    change_column_default :answers, :views, 0
  end

  def up
    # change_column :answers, :upvate, :integer, default: 0
    # change_column :answers, :downvote, :integer, default: 0
    # change_column :answers, :views, :integer, default: 0
    #change_column_default :answers, :upvate, 0
  end

  def down
    # change_column :answers, :upvate, :integer, default: nil
    # change_column :answers, :downvote, :integer, default: nil
    #change_column :answers, :views, :integer, default: nil
  end
end

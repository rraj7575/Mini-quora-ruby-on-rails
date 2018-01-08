class CreateUpvoteDownvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvote_downvotes do |t|
      t.string :vote_type
      t.references :user, index: true
      t.references :answer, index: true

    end
  end
end

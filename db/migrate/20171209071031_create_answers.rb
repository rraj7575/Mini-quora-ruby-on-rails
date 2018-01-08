class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.text :content
      t.integer :upvate
      t.integer :downvote
      t.integer :views
      t.references :user, index: true
      t.references :question, index:true
      t.timestamps
    end
  end
end

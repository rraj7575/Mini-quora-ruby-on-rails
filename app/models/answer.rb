class Answer < ApplicationRecord

  belongs_to :question
  belongs_to :user
  has_many :upvote_downvotes
  has_many :comments
end

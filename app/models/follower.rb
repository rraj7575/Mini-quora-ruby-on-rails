class Follower < ApplicationRecord
  belongs_to :user
  # validates :user_id, :following_id, :name, presence: true
  validates :following_id , uniqueness: { scope: :user_id }
end
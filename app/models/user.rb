class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #mount_uploader :avatar, AvatarUploader
  has_many :questions
  has_many :answers
  has_many :upvote_downvotes
  has_many :comments
end

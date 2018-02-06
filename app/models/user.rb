class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :avatar, AvatarUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #mount_uploader :avatar, AvatarUploader
  has_many :questions, :dependent => :destroy
  has_many :answers, :dependent => :destroy
  has_many :upvote_downvotes, :dependent => :destroy
  has_many :comments, :dependent => :destroy
  has_many :followers, :dependent => :destroy
end

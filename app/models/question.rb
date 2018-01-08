class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  attr_accessor :content
end

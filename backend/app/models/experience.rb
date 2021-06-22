class Experience < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :content, presence: true, length: { maximum: 10000 }

  belongs_to :user
  has_many :experience_categories
  has_many :categories, through: :experience_categories
end

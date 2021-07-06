class AccessCategory < ApplicationRecord
  validates :user_id, presence: true
  validates :category_id, presence: true
  validates :access_count, presence: true
  validates :access_date, presence: true

  belongs_to :user
  belongs_to :category
end
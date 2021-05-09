class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, length: { maximum: 100 }
  validates :introduction_text, length: { maximum: 10000 }
  validates :email, presence: true, length: { maximum: 100}

end
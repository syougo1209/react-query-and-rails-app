class Message < ApplicationRecord
  validates :content, presence: true, length: { maximum: 1000 }
  validates :user_id, presence: true
  validates :chat_room_id, presence: true

  belongs_to :user
end
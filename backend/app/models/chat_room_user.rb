class ChatRoomUser < ApplicationRecord
  validates :chat_room_id, presence: true
  validates :user_id, presence: true
end
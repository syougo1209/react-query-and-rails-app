class ChatRoom < ApplicationRecord
  include AASM

  validates :recruitment_id, presence: true

  belongs_to :recruitment
  has_many :chat_room_users
  has_many :users, through: :chat_room_users

  enum status: {
    starting: 1,
    stop_recruiting: 2,
    finished: 3
  }

  aasm column: :status, enum: true do
    state :starting, initial: true
    state :stop_recruiting
    state :finished
  end

  def organizer
    recruitment.user
  end

  def can_access?(accessing_user)
    users.include?(accessing_user)
  end
end
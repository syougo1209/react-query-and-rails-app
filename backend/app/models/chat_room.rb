class ChatRoom < ApplicationRecord
  include AASM

  validates :recruitment_id, presence: true

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
end
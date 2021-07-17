class Recruitment < ApplicationRecord
  include AASM

  validates :title, presence: true, length: { maximum: 100 }
  validates :content, presence: true, length: { maximum: 1000 }
  validates :user_id, presence: true
  validates :status, numericality: { only_integer: true }
  validates :recruitment_type, numericality: { only_integer: true }

  belongs_to :user
  has_one :chat_room
  has_many :recruitment_categories
  has_many :categories, through: :recruitment_categories

  RECRUITMENT_TYPE_ONE_SELECTING =1
  RECURITMENT_TYPE_ONE_FAST = 2
  enum status: {
    recruiting: 1, #募集中
    stop_recruiting: 2, #チャット相手が確定し、募集をやめた
    chat_progressing: 3, #この募集のイベントが進行中
    finished: 4, # この募集のイベントが終わった
    discarded: 5 #募集が途中で削除された
  }

  aasm column: :status, enum: true do
    state :recruiting, initial: true
    state :stop_recruiting
    state :chat_progressing
    state :finished
    state :discarded

    event :chat_start do
      transitions from: :recruiting, to: :chat_progressing
    end
  end

  def one_fast_type?
    recruitment_type == Recruitment::RECURITMENT_TYPE_ONE_FAST
  end
end
class Recruitment < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :content, presence: true, length: { maximum: 1000 }
  validates :user_id, presence: true
  validates :status, numericality: { only_integer: true }
  validates :recruitment_type, numericality: { only_integer: true }

  belongs_to :user
  has_many :recruitment_categories
  has_many :categories, through: :recruitment_categories

  RECRUITMENT_TYPE_ONE_SELECTING =1
  RECURITMENT_TYPE_ONE_FAST = 2
  enum state: {
    recruiting: 1, #募集中
    stop_recruiting: 2, #チャット相手が確定し、募集をやめた
    event_progressing: 3, #この募集のイベントが進行中
    finished: 4, # この募集のイベントが終わった
    discarded: 5 #募集が途中で削除された
  }
end
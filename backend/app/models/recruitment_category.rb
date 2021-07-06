class RecruitmentCategory < ApplicationRecord
  belongs_to :recruitment
  belongs_to :category
end
class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, length: { maximum: 100 }
  validates :introduction_text, length: { maximum: 10000 }
  validates :email, presence: true, length: { maximum: 100}

  def create_experience(experience_params)
    CreateExperienceService.call(user: self, experience_params: experience_params)
  end

  def create_recruitment(recruitment_params)
    CreateRecruitmentService.call(user: self, recruitment_params: recruitment_params)
  end
end
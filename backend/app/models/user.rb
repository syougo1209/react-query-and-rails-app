class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, length: { maximum: 100 }
  validates :introduction_text, length: { maximum: 10000 }
  validates :email, presence: true, length: { maximum: 100}

  has_many :weekly_access_categories, ->{ where(access_date: (1.week.ago.beginning_of_day)..(Date.today.end_of_day)).order(:created_at, access_count: :desc)}, class_name: 'AccessCategory'
  has_many :today_recommended_categories,
           through: :weekly_access_categories, source: :category

  def today_recommended_recruitments(category_ids: ,limit:)
    categories_recruitment_ids= RecruitmentCategory.joins(:recruitment)
                                                   .where(category_id: category_ids)
                                                   .where(recruitments: { status: Recruitment.states[:recruiting]})
                                                   .order('recruitments.created_at DESC')
                                                   .limit(limit+10)#10件多く引けば自分以外の募集が引ける可能性が高くなるため
                                                   .pluck(:recruitment_id, :user_id)

    return nil unless categories_recruitment_ids

     recruitment_ids= categories_recruitment_ids.lazy.select{|_,user_id| user_id!= id}.map{|recruitment_id ,_| recruitment_id}.first(limit)
     Recruitment.where(id: recruitment_ids)
  end

  def create_experience(experience_params)
    CreateExperienceService.call(user: self, experience_params: experience_params)
  end

  def create_recruitment(recruitment_params)
    CreateRecruitmentService.call(user: self, recruitment_params: recruitment_params)
  end
end
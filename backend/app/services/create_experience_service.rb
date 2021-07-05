
class CreateExperienceService

  def self.call(user:, experience_params:)
    new(user: user, experience_params: experience_params).call
  end

  def initialize(user:, experience_params:)
    @user=user
    @experience_params=experience_params
  end

  def call
    Experience.transaction do
      experience=create_experience!
      create_experience_category!(experience)

      experience
    end
  end

  private

  attr_reader :user, :experience_params

  def create_experience!
    Experience.create!(title: @experience_params[:title], content: @experience_params[:content], user_id: @user.id)
  end

  def create_experience_category!(experience)
    ExperienceCategory.create!(experience_id: experience.id, category_id: @experience_params[:categoryId])
  end
end
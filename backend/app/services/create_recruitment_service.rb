class CreateRecruitmentService
  def self.call(user:, recruitment_params:)
    new(user: user, recruitment_params: recruitment_params).call
  end

  def initialize(user:, recruitment_params:)
    @user=user
    @recruitment_params=recruitment_params
  end

  def call
    Recruitment.transaction do
      recruitment=create_recruitment!
      create_recruitment_category!(recruitment)

      recruitment
    end
  end

  private

  attr_reader :user, :recruitment_params

  def create_recruitment!
    Recruitment.create!(
      title: @recruitment_params[:title],
      content: @recruitment_params[:content],
      status: Recruitment.states[:recruiting],
      recruitment_type: @recruitment_params[:recruitmentType],
      user_id: @user.id
    )
  end

  def create_recruitment_category!(recruitment)
    RecruitmentCategory.create!(recruitment_id: recruitment.id, category_id: @recruitment_params[:categoryId])
  end
end
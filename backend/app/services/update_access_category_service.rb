
class UpdateAccessCategoryService

  def self.call(categories:,user:)
    new(categories: categories, user: user).call
  end

  def initialize(categories:,user:)
    @categories=categories
    @user=user
  end

  def call
    access_categories=[]
    today=Date.today
    is_succeeded=create_and_update_today_access_category

    is_succeeded ? true : false
  end

  private

  attr_reader :categories, :user

  def create_and_update_today_access_category
    AccessCategory.transaction do
      access_categories=[]
      today=Date.today
      @categories.each do |category|
        access_category= AccessCategory.lock.find_by(access_date: today, user_id: @user.id, category_id: category.id)
        if access_category.blank?
          access_category=AccessCategory.new(access_date: today, user_id: @user.id, category_id: category.id, access_count: 1)
        else
          access_category.access_count+=1
        end

        access_categories << access_category
      end
      result=AccessCategory.import(access_categories, on_duplicate_key_update: [:access_count])
      raise ActiveRecord::Rollback if result.failed_instances.present?

      true
    end
  end
end
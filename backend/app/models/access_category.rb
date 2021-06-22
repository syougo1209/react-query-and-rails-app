class AccessCategory < ApplicationRecord
  validates :user_id, presence: true
  validates :category_id, presence: true
  validates :access_count, presence: true
  validates :access_date, presence: true

  class << self
    def create_and_update_today_access_category(categories:, user_id:)
      access_categories=[]
      today=Date.today
      is_succeeded=transaction do
        categories.each do |category|
          access_category= lock.find_by(access_date: today, user_id: user_id, category_id: category.id)
          if access_category.blank?
            access_category=new(access_date: today, user_id: user_id, category_id: category.id, access_count: 1)
          else
            access_category.access_count+=1
          end

          access_categories << access_category
        end
        result=import(access_categories, on_duplicate_key_update: [:access_count])
        raise ActiveRecord::Rollback if result.failed_instances.present?

        true
      end

      is_succeeded ? true : false
    end
  end
end
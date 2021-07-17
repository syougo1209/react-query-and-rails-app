class RecruitmentChatStartService

  def self.call(user:, recruitment:)
    new(user: user, recruitment: recruitment).call
  end
  
  def initialize(user:, recruitment:)
    @user=user
    @recruitment=recruitment
  end

  def call
    return unless recruitment.recruiting?

    chat_room=ActiveRecord::Base.transaction do
      update_recruitment_status!
      chat_room=create_chat_room!

      chat_room
    end

    chat_room
  end

  private

  attr_reader :user, :recruitment

  def update_recruitment_status!
    @recruitment.lock!
    @recruitment.chat_start!
  end

  def create_chat_room!
    chat_room=ChatRoom.create!(recruitment_id: @recruitment.id)
    users=[recruitment.user, @user]

    chat_rooms=users.map do |user|
      ChatRoomUser.new(user_id: user.id, chat_room_id: chat_room.id)
    end

    result=ChatRoomUser.import chat_rooms
    raise ActiveRecord::Rollback if result.failed_instances.present?

    chat_room
  end
end
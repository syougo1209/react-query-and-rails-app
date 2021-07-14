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

    is_succeeded=ActiveRecord::Base.transaction do
      update_recruitment_status!
      create_chat_room!

      true
    end

    is_succeeded
  end

  private

  attr_reader :user, :recruitment

  def update_recruitment_status!
    @recruitment.lock!
    @recruitment.chat_start!
  end

  def create_chat_room!
    chat_room=ChatRoom.create!(recruitment_id: @recruitment.id)
    ChatRoomUser.create!(user_id: @user.id, chat_room_id: chat_room.id)
  end
end
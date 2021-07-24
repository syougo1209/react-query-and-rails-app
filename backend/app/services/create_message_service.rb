class CreateMessageService

  def self.call(user:, content:, chat_room:)
    new(user: user, content: content, chat_room: chat_room).call
  end

  def initialize(user:, content:, chat_room:)
    @user=user
    @content=content
    @chat_room=chat_room
  end

  def call
    Message.transaction do
      message=create_message!

      message
    end
  end

  private

  attr_reader :user, :content, :chat_room

  def create_message!
    Message.create!(content: @content, user_id: @user.id, chat_room_id: @chat_room.id)
  end
end
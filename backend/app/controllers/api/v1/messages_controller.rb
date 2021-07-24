module Api
  module V1
    class MessagesController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]
      before_action :check_valid_access, only: %i[create]

      def create
        message=current_user.create_message(content: message_params[:content], chat_room: @chat_room)
        return response_400 unless message
        render status: :created
      end

      private

      def message_params
        params.require(:message).permit(:content, :chatRoomId)
      end

      #todo 共通化
      def check_valid_access
        @chat_room=ChatRoom.find_by(id: message_params[:chatRoomId])

        return response_404 if !@chat_room || !@chat_room.starting?
        return response_401 if @chat_room.can_access?(current_user)
      end
    end
  end
end
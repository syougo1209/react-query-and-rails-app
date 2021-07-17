module Api
  module V1
    class ChatRoomsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[show]
      before_action :check_valid_access, only: %i[show]

      def show
        @messages = Message.includes(:user).where(chat_room_id: params[:id]).order(created_at: :desc)
        render 'show', formats: :json, handlers: 'jbuilder', status: :ok
      end

      private

      def check_valid_access
        @chat_room=ChatRoom.find_by(id: params[:id])
        return response_404 if !@chat_room || !@chat_room.starting?
        return response_401 if @chat_room.can_access?(current_user)
      end
    end
  end
end
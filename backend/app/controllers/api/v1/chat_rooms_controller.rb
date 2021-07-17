module Api
  module V1
    class ChatRoomsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[show]
      before_action :check_valid_access, only: %i[show]

      def show
        
      end

      private

      def check_valid_access
        chat_room=ChatRoom.find_by(id: params[:id])
        return response_401 if chat_room
      end
    end
  end
end
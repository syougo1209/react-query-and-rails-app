module Api
  module V1
    class RecruitmentChatStartsController < ApplicationController
      before_action :restrict_to_logged_in_user, only: %i[create]

      RECRUITING_FINISHED_ERROR_MESSAGE='募集が終了した、または募集タイプが変更されました。'

      def confirm
        recruitment=Recruitment.find_by(id: params[:recruitment_id])

        return response_404 unless recruitment
        return response_400 if !recruitment.recruiting? || !recruitment.one_fast_type?
        render json: {}, status: :ok
      end

      def create
        recruitment=Recruitment.find_by(id: params[:recruitment_id])
        return response_404 unless recruitment
        return response_400(RECRUITING_FINISHED_ERROR_MESSAGE) if !recruitment.recruiting? || !recruitment.one_fast_type?

        chat_room=RecruitmentChatStartService.call(user: current_user, recruitment: recruitment)
        chat_room ? render(json: {chat_room_id: chat_room.id}, status: :created) : response_400
      end
    end
  end
end
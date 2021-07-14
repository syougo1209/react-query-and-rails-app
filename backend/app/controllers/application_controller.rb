class ApplicationController < ActionController::API
  include ActionController::Cookies
  include LoginActions
  before_action :check_xhr_header

  def restrict_to_logged_in_user
    return render_401_error if session[:user_id].blank?
  end

  def response_400(error='bad request')
    render json: { message: error }, status: :bad_request
  end

  def response_404(error)
    render json: { message: error }, status: :not_found
  end

  private 

  def check_xhr_header
    return if request.xhr?
    render json: { error: 'forbidden' }, status: :forbidden
  end

  def render_401_error
    render json: { error: "unauthorized" }, status: :unauthorized
  end
end

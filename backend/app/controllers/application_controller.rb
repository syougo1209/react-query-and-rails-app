class ApplicationController < ActionController::API
  include ActionController::Cookies
  include LoginActions
  before_action :check_xhr_header

  def restrict_to_logged_in_user
    return render_401_error if session[:user_id].blank?
  end

  private 

  def check_xhr_header
    return if request.xhr?
    render json: { error: 'forbidden' }, status: :forbidden
  end

  def render_401_error
    render json: { message: "unauthorized" }, status: :unauthorized
  end
end

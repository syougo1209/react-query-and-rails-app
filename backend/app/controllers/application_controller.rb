class ApplicationController < ActionController::API
  include LoginActions
  include ActionController::Cookies
  before_action :check_xhr_header

  private 
  def check_xhr_header
    return if request.xhr?
    render json: { error: 'forbidden' }, status: :forbidden
  end
end

module LoginActions
  def login(user)
    session[:user_id] = user.id
    @current_user = user
  end

  def logout
    session.delete(:user_id)
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session[:user_id])
  end

  def restrict_to_logged_in_user
    return render_401_error if session[:user_id]
  end

  def render_401_error
    render json: { message: "unauthorized" }, status: 401
  end
end


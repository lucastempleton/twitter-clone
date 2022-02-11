class Api::SessionsController < ApplicationController
  def finduser
    user = User.find_by_username(params[:username])
    if user
      render json: {success: true}, status: :ok
    else render json: {success: false}, status: :not_found
    end
  end
  def findemail
    user = User.find_by_email(params[:email])
    if user
      render json: {success: true}, status: :ok
    else render json: {success: false}, status: :not_found
    end
  end
  def findphone
    user = User.find_by_phone(params[:phone])
    if user
      render json: {success: true}, status: :ok
    else render json: {success: false}, status: :not_found
    end
  end

  def login
    user = User.find_by_username(params[:username])
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else render json: {error: 'Invalid password'}, status: :unauthorized
    end
  end
  
  def logout
    session.delete :user_id
  end
end

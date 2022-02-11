class Api::UsersController < ApplicationController
    def index
        render json: User.all
    end
    def show
        if current_user
            render json: current_user, status: :ok
        else render json: 
            "User must log in", status: :unauthorized
        end
    end
    def create
        formatted_phone = params[:phone]
        user = User.new(params.permit(:username, :password, :email, :avatar, :name, :bio, :phone, :follower_count, :following_count))
        if user.save
            session[:user_id] = user.id
            render json:  user, status: :created
        else render json: {success: false, error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
end

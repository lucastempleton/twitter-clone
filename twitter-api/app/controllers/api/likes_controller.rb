class Api::LikesController < ApplicationController
    def findLike
        like = Like.where(post_id: params[:post_id], user_id: params[:user_id])
        if like == []
            render json: {success: false }, status: 200
        elsif like
            render json: {success: true}, status: 200
        end
    end
end

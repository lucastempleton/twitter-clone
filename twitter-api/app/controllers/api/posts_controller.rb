class Api::PostsController < ApplicationController
    def index
        render json: Post.all
    end
    def create
        post = Post.new(params.permit(:text, :user_id, :like_count, :repost_count))
        if post.save
            render json:  post, status: :created
        else render json: {success: false, error: post.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def addLike
        post = Post.find(params[:post_id])
        like = Like.new(params.permit(:user_id, :post_id))
        post.update(params.permit(:like_count))
        if like.save
            render json: like, status: :created
        else render json: {success: false, error: post.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def unLike
        post = Post.find(params[:post_id])
        like = Like.find_by_post_id(params[:post_id])
        like.destroy
        post.update(params.permit(:like_count))
        render json: post, status: :no_content
    end
end

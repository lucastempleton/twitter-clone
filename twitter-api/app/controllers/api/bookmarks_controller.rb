class Api::BookmarksController < ApplicationController
    def index
       render json: Bookmark.all
    end
    def setBookmark
        bookmark = Bookmark.new(params.permit(:user_id, :post_id))
        if bookmark.save
            render json: bookmark, status: :created
        else
            render json: {success: false, error: post.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def unBookmark
        bookmark = Bookmark.where(user_id: params[:user_id], post_id: params[:post_id])
        bookmark.destroy_all
        render json: {status: 'deleted'}, status: 200
    end
    def findBookmark
        bookmarks = Bookmark.where(user_id: params[:user_id], post_id: params[:post_id])
        if bookmarks == []
            render json: {success: false }, status: 200
        elsif bookmarks
            render json: {success: true}, status: 200
        end
    end
end

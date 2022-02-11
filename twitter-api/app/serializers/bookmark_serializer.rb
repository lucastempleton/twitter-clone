class BookmarkSerializer < ActiveModel::Serializer
  attributes :user_id, :post_id, :post

    def post
      post = Post.find_by_id(self.object.post_id)
      owner = User.find_by_id(post.user_id)
      {
        text: post.text,
        like_count: post.like_count,
        repost_count: post.repost_count,
        owner: {
          username: "@#{owner.username}",
          name: owner.name,
          avatar: owner.avatar
        }
      }
    end
end

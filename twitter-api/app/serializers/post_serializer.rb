class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :like_count, :repost_count, :created_at, :owner

  # def mentions
  #   mentions = PostMentions.find_by_post_id(self.object.id)
  #   {

  #   }
  # end
  def owner
    user = User.find_by_id(self.object.user_id)
    {
      username: "@#{user.username}",
      name: user.name,
      avatar: user.avatar
    }
  end
end

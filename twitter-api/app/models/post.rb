class Post < ApplicationRecord
    has_many :hashtag_posts
    has_many :hashtags, through: :hashtag_posts
    has_many :posts_hashtags
    has_many :post_mentions
    has_many :mentions, through: :post_mentions
    has_many :likes
    has_many :posts_images
    belongs_to :user
end

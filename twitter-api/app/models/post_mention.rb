class PostMention < ApplicationRecord
    belongs_to :post
    has_many :mention_posts
end

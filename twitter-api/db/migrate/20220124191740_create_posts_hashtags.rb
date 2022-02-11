class CreatePostsHashtags < ActiveRecord::Migration[7.0]
  def change
    create_table :posts_hashtags do |t|
      t.integer :post_id
      t.string :hashtags
    end
  end
end

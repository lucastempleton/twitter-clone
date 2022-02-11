class CreateHashtagPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :hashtag_posts do |t|
      t.integer :hashtag_id
      t.string :post_id

    end
  end
end

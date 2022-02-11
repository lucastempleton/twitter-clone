class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :like_count
      t.integer :orig_post_id
      t.integer :reply_to_id
      t.integer :repost_count
      t.string :text

      t.timestamps
    end
  end
end

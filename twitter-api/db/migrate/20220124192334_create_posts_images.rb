class CreatePostsImages < ActiveRecord::Migration[7.0]
  def change
    create_table :posts_images do |t|
      t.integer :post_id
      t.string :image

      t.timestamps
    end
  end
end

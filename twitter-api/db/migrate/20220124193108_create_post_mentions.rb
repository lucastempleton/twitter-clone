class CreatePostMentions < ActiveRecord::Migration[7.0]
  def change
    create_table :post_mentions do |t|
      t.integer :post_id
      t.integer :amt_of_mentions
      t.integer :mentions_id

    end
  end
end

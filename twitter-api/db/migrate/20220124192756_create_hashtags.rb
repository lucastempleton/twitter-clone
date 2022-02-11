class CreateHashtags < ActiveRecord::Migration[7.0]
  def change
    create_table :hashtags do |t|
      t.integer :post_count
      t.string :tag

      t.timestamps
    end
  end
end

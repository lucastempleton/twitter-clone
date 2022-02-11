class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :avatar
      t.string :bio
      t.string :follower_count
      t.string :following_count
      t.string :name
      t.string :username
      t.string :phone
      t.string :email
      t.boolean :verified

      t.timestamps
    end
  end
end

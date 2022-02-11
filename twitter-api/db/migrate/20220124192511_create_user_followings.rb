class CreateUserFollowings < ActiveRecord::Migration[7.0]
  def change
    create_table :user_followings do |t|
      t.references :followee, foreign_key: { to_table: 'users' }
      t.references :follower, foreign_key: { to_table: 'users' }
    end
  end
end

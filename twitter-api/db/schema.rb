# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_09_162019) do

  create_table "bookmarks", force: :cascade do |t|
    t.integer "post_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hashtag_posts", force: :cascade do |t|
    t.integer "hashtag_id"
    t.string "post_id"
  end

  create_table "hashtags", force: :cascade do |t|
    t.integer "post_count"
    t.string "tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer "post_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mention_posts", force: :cascade do |t|
    t.string "text"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "post_mentions", force: :cascade do |t|
    t.integer "post_id"
    t.integer "amt_of_mentions"
    t.integer "mentions_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "like_count"
    t.integer "orig_post_id"
    t.integer "reply_to_id"
    t.integer "repost_count"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "posts_hashtags", force: :cascade do |t|
    t.integer "post_id"
    t.string "hashtags"
  end

  create_table "posts_images", force: :cascade do |t|
    t.integer "post_id"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_followings", force: :cascade do |t|
    t.integer "followee_id"
    t.integer "follower_id"
    t.index ["followee_id"], name: "index_user_followings_on_followee_id"
    t.index ["follower_id"], name: "index_user_followings_on_follower_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "avatar"
    t.string "bio"
    t.string "follower_count"
    t.string "following_count"
    t.string "name"
    t.string "username"
    t.string "phone"
    t.string "email"
    t.boolean "verified"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  add_foreign_key "user_followings", "users", column: "followee_id"
  add_foreign_key "user_followings", "users", column: "follower_id"
end

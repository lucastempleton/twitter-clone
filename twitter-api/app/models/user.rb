class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :likes, through: :posts
    has_many :user_followings
    
    validates :phone, allow_blank: true, uniqueness: true
    validates :email, allow_blank: true, format:  /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, uniqueness: true
    validates :username, presence: true, uniqueness: true
end

Rails.application.routes.draw do
  namespace :api do
    resources :bookmarks, only: [:index]
    # resources :mention_posts
    # resources :post_mentions
    # resources :hashtag_posts
    # resources :hashtags
    # resources :user_followings
    # resources :likes, only: [:show]
    # resources :posts_images
    resources :posts, only: [:index, :create]
    # resources :posts_hashtags

    resources :users, only: [:index, :create]
    get "/me", to: 'users#show'
    delete '/logout', to: 'sessions#logout'
    post '/find-user', to: 'sessions#finduser'
    post '/login', to: 'sessions#login'
    post '/find-email', to: 'sessions#findemail'
    post '/find-phone', to: 'sessions#findphone'
    patch '/add-like', to: 'posts#addLike'
    patch '/un-like', to: 'posts#unLike'
    patch '/find-like', to: 'likes#findLike'
    post '/set-bookmark', to: 'bookmarks#setBookmark'
    patch '/un-bookmark', to: 'bookmarks#unBookmark'
    patch '/find-bookmark', to: 'bookmarks#findBookmark'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
  end
end

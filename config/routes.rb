Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount API::Base, at: '/'
  #mount GrapeSwaggerRails::Engine, at: "/documentation"
  root to:'questions#index'
  # root to: 'sessions#new'
  # devise_scope :user do
  #   get "/users/sign_in" => "sessions#new"
  # end

  resources :questions
  resource :comments, only: [:edit, :destroy]
  resources :users, only: [:edit, :update]
  resources :questions do
    resources :answers
  end

  post 'upvote_answer' => 'answers#upvote_answer'
  post 'downvote_answer' => 'answers#downvote_answer'
  post 'show_upvoted_users' => 'upvotedownvotes#show_upvoted_users'
  post 'show_comments_of_a_answer' => 'comments#show_comments_of_a_answer'
  post 'new_comment' => 'comments#new_comment'
  get 'all_answers_of_a_user' => 'users#all_answers_of_a_user'
  post 'change_profile_picture' => 'users#change_profile_picture'
  get 'all_questions_of_a_user' => 'users#all_questions_of_a_user'
  get 'all_followers_of_a_user' => 'users#all_followers_of_a_user'
  get 'all_following_of_a_user' => 'users#all_following_of_a_user'
  get 'follow_a_user' => 'users#follow_a_user'
  get 'unfollow_a_user' => 'users#unfollow_a_user'
  get 'next_page_in_question' => 'questions#next_page'
end

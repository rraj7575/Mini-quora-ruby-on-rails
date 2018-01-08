Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount API::Base, at: '/'
  #mount GrapeSwaggerRails::Engine, at: "/documentation"
  root to:'questions#new'
  resources :questions
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
end

class UpvotedownvotesController < ApplicationController
  #protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def show_upvoted_users
    answer_id = params[:answer_id]
    @upvoted_users = User.joins(:upvote_downvotes).where('upvote_downvotes.answer_id = ? AND upvote_downvotes.vote_type =? ',
                                                          answer_id, 'upvote')
    render json: { status: true, new_view_partial: render_to_string('_show_up_users',locals: {data: @upvoted_users},layout: false)}
  end
end
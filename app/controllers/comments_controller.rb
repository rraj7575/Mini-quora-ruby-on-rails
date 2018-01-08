class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show_comments_of_a_answer
    answer_id = params[:answer_id]
    comment_users_data = User.joins(:comments).where('comments.answer_id = ? ', answer_id).select('comments.commented_text,
                                                                                       users.first_name, users.last_name')
    render json: { status: true, all_comments_of_answer_partial_view: render_to_string('_user_and_comment.html',locals: {data: comment_users_data}, layout:false)}
  end

  def new_comment
    begin
      answer_id = params[:answer_id]
      answer = Answer.find_by_id(answer_id)
      answer.comments.create(commented_text: params[:commented_text], user_id: current_user.id)
      render json: {status: 1}
    rescue
      render json: {status: 0}
    end
  end
end
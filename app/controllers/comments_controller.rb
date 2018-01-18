class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def edit
    begin
      comment = Comment.find_by_id(params['comment_id'])
      comment.commented_text = params['updating_comment_text']
      comment.save!
      render json: {status: true}
    rescue
      render json: {status: false}
    end
  end

  def destroy
    begin
      Comment.find_by_id(params['comment_id']).delete
      render json: { status: true }
    rescue
      render json: { status: false}
    end
  end
  def show_comments_of_a_answer
    answer_id = params[:answer_id]
    comment_users_data = User.joins(:comments).where('comments.answer_id = ? ', answer_id).order('comments.created_at DESC').select('comments.commented_text, comments.id as comment_id,
                                                                                       users.name, users.id as user_id')
    render json: { status: true, all_comments_of_answer_partial_view: render_to_string('_user_and_comment.html',locals: {data: comment_users_data}, layout:false)}
  end

  def new_comment
    begin
      answer_id = params[:answer_id]
      answer = Answer.find_by_id(answer_id)
      # user_last_comment = Comment.where('answer_id = ? AND user_id = ?', answer_id, current_user.id).last!
      comment = answer.comments.create(commented_text: params[:commented_text], user_id: current_user.id)
      # render json: {status: 1, user_id: current_user.id}
      render json: { status: true, recent_comment: render_to_string('_user_recent_comment.html',locals: {user: current_user, comment: comment}, layout:false)}
    rescue
      render json: {status: 0}
    end
  end
end
class AnswersController < ApplicationController
  #protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def index
    @question = Question.find_by(id: params[:question_id])
    @all_answers = @question.answers   #Answer.where(question_id: params['question_id'])
    # @last_user_commented_on_a_answer = @all_answers.comments
    @all_answered_users = {}
    @all_answers.each do |answer|
      user_id = answer.user_id
      @all_answered_users[user_id] = User.find_by_id(user_id)
    end
  end

  def create
    @question = Question.find_by(id: params[:question_id])
    @answer = @question.answers.create!(content: params[:answer][:content], user_id: current_user.id,
                                        question_id: params[:question_id])
    redirect_to question_answers_path
  end

  def edit
    begin
      answer = Answer.find_by_id(params['answer_id'])
      answer.content = params['updating_answer_text']
      answer.save!
      render json: {status: true}
    rescue
      render json: {status: false}
    end
  end

  def destroy
    begin
      answer = Answer.find_by_id(params['answer_id'])
      answer.comments.delete_all
      answer.delete
      render json: { status: true }
    rescue
      render json: { status: false}
    end
  end

  def upvote_answer
    begin
      @answer = Answer.find_by_id(params['answer_id'])
      upvote_count = @answer.upvate
      upvote_count += 1
      @answer.update!(upvate: upvote_count, user_id: current_user.id)
      @answer.upvote_downvotes.create(user_id: current_user.id, vote_type: 'upvote')
      render json: {status: 1}
    rescue
      render json: {status: 0}
    end
  end

  def downvote_answer
    begin
      @answer = Answer.find_by_id(params['answer_id'])
      downvote_count = @answer.downvote
      downvote_count += 1
      @answer.update!(downvote: downvote_count, user_id: current_user.id)
      @answer.upvote_downvotes.create(user_id: current_user.id, vote_type: 'dounvote', answer_id: @answer)
      render json: {status: 1}
    rescue
      render json: {status: 0}
    end
  end
end



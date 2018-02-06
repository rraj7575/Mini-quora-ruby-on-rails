class QuestionsController < ApplicationController

  def index
    @all_questions = Question.paginate(page: params[:page], per_page: 2).order('created_at DESC')
    @last_answer_of_all_questions = {}
    @user_of_last_answer = {}
    @all_questions.each do |question|
      all_answers_for_current_question = question.answers
      unless all_answers_for_current_question.empty?
        last_answer = all_answers_for_current_question.last
        @last_answer_of_all_questions[question.id] = last_answer
        last_user = User.find_by_id(last_answer.user_id)
        @user_of_last_answer[question.id] = last_user
      end
    end
    format.json { render json: @all_questions }
  end

  def new
    @question = Question.new
  end

  def create
    begin
      @question = current_user.questions.create!(question_params)
      current_user.questions_count += 1
      current_user.save!
      rescue
      @question = Question.new
      render 'new'
    end
    redirect_to  questions_path
  end

  def edit
    @question = Question.find_by(id: params[:id])
  end

  def update
    updated_q_string = params[:question][:name]
    question_id = params[:id]
    begin
      question = Question.find_by_id(question_id)
      question.update!(name: updated_q_string)
    rescue
      redirect_to edit_question_path
      return
    end
    redirect_to questions_path
  end

  def destroy
    begin
      @question = Question.find_by(params[:id])
      @question.answers.delete_all
      @question.delete
    rescue

    end

    redirect_to questions_path
  end

  private

  def question_params
    params.require(:question).permit(:name)
  end


end
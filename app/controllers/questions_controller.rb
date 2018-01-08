class QuestionsController < ApplicationController

  def index
    @all_questions = Question.all
    @first_answer_of_all_questions = {}
    @user_of_first_answer = {}
    @all_questions.each do |question|
      all_answers_for_current_question = question.answers
      unless all_answers_for_current_question.empty?
        first_answer = all_answers_for_current_question.first
        @first_answer_of_all_questions[question.id] = first_answer
        first_user = User.find_by_id(first_answer.user_id)
        @user_of_first_answer[question.id] = first_user
      end
    end
  end

  def new
    @question = Question.new
  end

  def create
    begin
      @question = current_user.questions.create!(question_params)
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
    @question = Question.find_by(params[:id])
    @question.delete
    redirect_to questions_path
  end

  private

  def question_params
    params.require(:question).permit(:name)
  end


end
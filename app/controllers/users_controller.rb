class UsersController < ApplicationController
  attr_accessor :avatar
  # mount_uploader :avatar, AvatarUploader
  before_action :current_ability, only: [:edit, :update]
  load_and_authorize_resource
  # skip_before_action :verify_authenticity_token

  def edit
    @active_user = current_user
  end

  def update
    @active_user = current_user
    @active_user.update!(permit_params)
    @active_user.avatar = params[:user][:avatar]
    @active_user.save!
    redirect_to questions_path
  end

  def all_answers_of_a_user
     @user = User.find_by_id(params[:id])
    # all_answers_by_users = Question.includes(:answers).where('user_id = ?',user.id)
    @all_answers_by_user_with_questions = ActiveRecord::Base.connection.execute("SELECT questions.id as question_id, questions.name as question_name,
                                                     answers.content as answer_content, answers.upvate as upvote_count, answers.downvote as downvote_count, answers.id as answer_id
                                                     FROM questions INNER JOIN answers ON questions.id=answers.question_id WHERE answers.user_id=\'#{params[:id]}\'")
  end

  def change_profile_picture
    render json: {status: true}
  end

  private

  def current_ability
    @ability = Ability.new(current_user)
  end

  def permit_params
    params.require(:user).permit(:name, :email, :phone)
  end
end
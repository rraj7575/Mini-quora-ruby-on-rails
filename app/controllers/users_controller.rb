class UsersController < ApplicationController
  # attr_accessor :avatar
  # mount_uploader :avatar, AvatarUploader
  before_action :current_ability, only: [:edit, :update]

  # load_and_authorize_resource
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
    @user = User.find_by_id!(params[:id])
    @r_u_following = @user.followers.where(following_id: current_user.id)
    @all_answers_by_user_with_questions = ActiveRecord::Base.connection.execute("SELECT questions.id as question_id, questions.name as question_name,
                                                  answers.content as answer_content, answers.upvate as upvote_count, answers.downvote as downvote_count, answers.id as answer_id,
                                                  answers.user_id as user_id_of_answer FROM questions INNER JOIN answers ON questions.id=answers.question_id WHERE answers.user_id=\'#{params[:id]}\'")
  end


  def change_profile_picture
    render json: {status: true}
  end

  def all_questions_of_a_user
    @user = User.find_by_id!(params[:user_id])
    @r_u_following = @user.followers.where(following_id: current_user.id)
    @all_questions = @user.questions.includes(:answers)
  end

  def all_followers_of_a_user
    begin
      # @r_u_following = Follower.find_by(follower_id: current_user.id, following_id: params[:user_id])
      @user = User.find_by_id!(params[:user_id])
      @r_u_following = @user.followers.where(following_id: current_user.id)
      @all_followers = @user.followers
    end
  end

  def all_following_of_a_user
    begin
      @user = User.find_by_id!(params[:user_id])
      @r_u_following = @user.followers.where('following_id =?', current_user.id)
      @all_followings = Follower.where(following_id: params[:user_id])
    end
  end

  def follow_a_user
    begin
      just_followed = User.find_by_id!(params[:following_id])
      k=just_followed.followers.create!(follower_name: current_user.name,following_id: current_user.id, following_name: just_followed.name)
      current_user.following_count += 1
      just_followed.followers_count += 1
      current_user.save!
      just_followed.save!
      render json: {status: true, follower_count: just_followed.followers_count}
    rescue Exception=>e
      Rails.logger.debug "exception --------#{e.message}----------"
      render json: {status: false, follower_count: just_followed.followers_count}
    end
  end

  def unfollow_a_user
    begin
      just_unfollowed = User.find_by_id!(params[:unfollowed_id])
      just_unfollowed.followers.where(following_id: current_user.id).first.delete
      current_user.following_count -= 1
      just_unfollowed.followers_count -= 1
      current_user.save!
      just_unfollowed.save!
      render json: {status: true, follower_count: just_unfollowed.followers_count}
    rescue Exception=>e
      Rails.logger.debug "exception --------#{e.message}----------"
      render json: {status: false, follower_count: just_unfollowed.followers_count}
    end

  end

  private

  def current_ability
    @ability = Ability.new(current_user)
  end

  def permit_params
    params.require(:user).permit(:name, :email, :phone)
  end
end
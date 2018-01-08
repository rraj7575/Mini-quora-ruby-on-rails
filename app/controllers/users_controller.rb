class UsersController < ApplicationController
  # has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  before_action :current_ability, only: [:edit, :update]
  load_and_authorize_resource

  def edit
    @active_user = current_user
  end

  def update
    @active_user = current_user
    @active_user.update!(permit_params)
    # @active_user.avatar = params[:user][:avatar]
    @active_user.save!
    # @active_user.avatar.url
    # @active_user.avatar.current_path
    # @active_user.avatar_identifier
    redirect_to questions_path
  end

  def all_answers_of_a_user

    user = User.find_by_id(params[:id])
    all_answers_by_users = Question.includes(:answers).where('user_id = ?',user.id)
  end

  private

  def current_ability
    @ability = Ability.new(current_user)
  end

  def permit_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone)
  end
end
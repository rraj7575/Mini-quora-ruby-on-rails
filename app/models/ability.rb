class Ability
  include CanCan::Ability

  def initialize(user)
    # if user.role == 1
    #   can :manage, :all
    # else
    #   can :read, :all
    # end
    can :edit, User, id: user.id
    can :create, Answer, user_id: user.id
    can :update, User, id: user.id
    can :all_answers_of_a_user, User
    can :change_profile_picture, User
    can :all_questions_of_a_user, User
    can :all_followers_of_a_user, User
    can :all_following_of_a_user, User
    can :follow_a_user, User
    can :unfollow_a_user, User
  end
end

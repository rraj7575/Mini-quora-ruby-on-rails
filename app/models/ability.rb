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
  end
end

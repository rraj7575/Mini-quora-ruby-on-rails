require 'rubygems'
require 'faker'
namespace :faker do
  task :create_user => :environment do
    1000.times do
      user = User.new
      user.first_name = Faker::Name.name
      user.last_name = Faker::Name.name
      user.email = Faker::Internet.email
      user.password = Faker::Internet.password
      # user.confirm_password = user.password
      user.save!
      puts "user with id #{user.id} has been saved."
    end
  end
end
module API
  module V1
    class Questions < Grape::API
      include API::V1::Defaults

      resource :questions do
        desc 'Return all questions'
        get '/all' do
          Question.all
        end
      end
    end
  end
end

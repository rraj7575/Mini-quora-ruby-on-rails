require "grape-swagger"
module API
  module V1
    class Base < Grape::API
      mount API::V1::Users
      mount API::V1::Questions
      # mount API::V1::AnotherResource\

      add_swagger_documentation(
        info: {
            title: '',
        },
        api_extension_type: 'json',
        # host: ENV['DEV_DOMAIN'],
        api_version: "#{ENV['API_VERSION']}",
        doc_version: '1.0',
        hide_documentation_path: true,
        mount_path: "/api/#{ENV['API_VERSION']}/swagger_doc",
        hide_format: true
      )
    end
  end
end

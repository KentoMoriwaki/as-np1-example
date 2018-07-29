module Grgr
  module GrpcInterceptors
    class ActiveRecordConnectionInterceptor < GRPC::ServerInterceptor
      def request_response(request:, call:, method:)
        unless ActiveRecord::Base.connection.active?
          ActiveRecord::Base.establish_connection
        end
        response = yield
        ActiveRecord::Base.clear_active_connections!
        response
      end
    end
  end
end

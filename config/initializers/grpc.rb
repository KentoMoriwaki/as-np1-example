module GRPC
  def self.logger
    LOGGER
  end

  LOGGER = Logging.logger(STDOUT)
  LOGGER.level = :debug
end


# grpc_libs = "#{Rails.root}/lib/"
# $LOAD_PATH.unshift(grpc_libs)

# Dir.glob(grpc_libs + '**/*.rb').each { |f| require f }

grpc_services = "#{Rails.root}/app/grpc/**/*.rb"
Dir.glob(grpc_services).each { |f| require f }

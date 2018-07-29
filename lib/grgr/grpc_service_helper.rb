module Grgr
  module GrpcServiceHelper
    def map_resource(message, record, fields = nil)
      mapper = Grgr::ResourceMapper.new(message, record, fields: fields.paths, repeated: false)
      mapper.resolve
    end

    def map_collection(message, records, fields = nil)
      mapper = Grgr::ResourceMapper.new(message, records, fields: fields.paths, repeated: true)
      mapper.resolve
    end
  end
end

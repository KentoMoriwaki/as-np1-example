module Grgr
  class ResourceMapper
    attr_reader :message, :record, :field_mask_node, :queue

    def initialize(message, record, fields: nil, repeated: false)
      @record = record
      if fields
        @field_mask_node = FieldMaskNode.build(message, fields, repeated: repeated)
      end
    end

    def resolve
      @queue = []
      message_class = field_mask_node.descriptor.msgclass
      @result = field_mask_node.repeated ? Google::Protobuf::RepeatedField.new(:message, message_class) : message_class.new
      @queue << {
        value: record,
        node: field_mask_node,
        result: @result,
      }
      while task = @queue.shift
        consume_task(task)
      end
      if field_mask_node.repeated
        @result.to_ary
      else
        @result
      end
    end

    def consume_task(task)
      value, node, result = task.values_at(:value, :node, :result)
      mapper_class = node.mapper
      message_class = node.descriptor.msgclass
      if value.is_a?(Enumerable)
        value.each.with_index do |val, index|
          message = message_class.new
          result[index] = message
          @queue << {
            value: val,
            node: node,
            result: message
          }
        end
      else
        mapper = mapper_class.new(value)
        node.children.each do |field, child_node|
          if child_node.has_child?
            result[field] ||= child_node.descriptor.msgclass.new
            @queue << {
              value: mapper.public_send(field),
              node: child_node,
              result: result[field],
            }
          else
            result[field] = mapper.public_send(field)
          end
        end
      end
    end
  end
end

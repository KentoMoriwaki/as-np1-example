module Grgr
  class FieldMaskNode
    attr_reader :field_descriptor, :descriptor, :repeated, :children

    def self.build(message, paths, repeated: false)
      node = self.new(descriptor: message.descriptor, repeated: repeated)
      paths.each do |path|
        current_node = node
        path.split(".").each do |field|
          current_node = current_node.add_child(field)
        end
      end
      node
    end

    def initialize(
      descriptor: nil,
      field_descriptor: nil,
      children: {},
      repeated: false
    )
      @descriptor = descriptor
      @field_descriptor = field_descriptor
      @children = children
      if field_descriptor && field_descriptor.type == :message
        @descriptor = field_descriptor.subtype
      end
      @repeated = repeated.nil? ? field_descriptor.label == :repeated : repeated
    end

    def add_child(name)
      return children[name] if children[name]
      fd = descriptor.find{|f| f.name == name }
      child_node = self.class.new(field_descriptor: fd)
      children[name] = child_node
      child_node
    end

    def mapper
      klass = descriptor.name.split('.').last
      "#{klass}Mapper".constantize
    end

    def has_child?
      !@descriptor.nil?
    end
  end
end

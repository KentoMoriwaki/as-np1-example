class BaseMapper
  attr_reader :record, :message

  def initialize(record, message = nil)
    @record = record
    @message = message
  end

  def method_missing(meth)
    @record.public_send(meth)
  end
end

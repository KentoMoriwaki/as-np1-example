class UserSerializer < ApplicationSerializer
  attributes :id, :name

  has_one :profile
end

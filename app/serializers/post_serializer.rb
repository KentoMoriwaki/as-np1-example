class PostSerializer < ApplicationSerializer
  attributes :id, :title, :description

  belongs_to :user
end

class PostSerializer < ApplicationSerializer
  attributes :id, :title, :description

  belongs_to :user, serializer: UserSerializer do
    BatchLoader.for(object.user_id).batch do |ids, loader|
      User.where(id: ids).each{|user| loader.call(user.id, user) }
    end
  end
end

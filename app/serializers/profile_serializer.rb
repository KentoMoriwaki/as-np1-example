class ProfileSerializer < ApplicationSerializer
  attributes :id, :introduction

  belongs_to :cover_post, serializer: PostSerializer do
    if object.cover_post_id
      BatchLoader.for(object.cover_post_id).batch do |ids, loader|
        Post.where(id: ids).each{|post| loader.call(post.id, post) }
      end
    end
  end
end

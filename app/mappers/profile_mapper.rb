class ProfileMapper < BaseMapper
  def cover_post
    return nil unless record.cover_post_id
    BatchLoader.for(record.cover_post_id).batch do |ids, loader|
      Post.where(id: ids).each{|post| loader.call(post.id, post) }
    end
  end
end

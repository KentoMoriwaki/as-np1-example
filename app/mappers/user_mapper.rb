class UserMapper < BaseMapper
  def profile
    BatchLoader.for(record.id).batch do |ids, loader|
      Profile.where(user_id: ids).each{|profile| loader.call(profile.user_id, profile) }
    end
  end

  def posts
    BatchLoader.for(record.id).batch do |ids, loader|
      Post.where(user_id: ids).group_by(&:user_id).each do |user_id, posts|
        loader.call(user_id, posts)
      end
    end
  end
end

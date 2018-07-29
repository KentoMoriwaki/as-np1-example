class PostMapper < BaseMapper
  def user
    BatchLoader.for(record.user_id).batch do |ids, loader|
      User.where(id: ids).each{|user| loader.call(user.id, user) }
    end
  end
end


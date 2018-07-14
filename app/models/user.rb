class User < ApplicationRecord
  has_one :profile

  def profile_lazy
    BatchLoader.for(id).batch do |ids, loader|
      Profile.where(user_id: ids).each{|profile| loader.call(profile.user_id, profile) }
    end
  end
end

class UserSerializer < ApplicationSerializer
  attribute :id
  attribute :name

  has_one :profile do
    BatchLoader.for(object.id).batch do |ids, loader|
      Profile.where(user_id: ids).each{|profile| loader.call(profile.user_id, profile) }
    end
  end
end

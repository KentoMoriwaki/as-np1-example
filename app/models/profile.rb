class Profile < ApplicationRecord
  belongs_to :user
  belongs_to :cover_post, class_name: "Post", optional: true
end

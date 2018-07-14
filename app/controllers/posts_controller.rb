class PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts,
      fields: [:id, :title, :description],
      include: {
        user: {
          profile: :cover_post
        }
      }
  end
end

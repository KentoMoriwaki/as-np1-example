class PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts, fields: [:id, :title, :description, :"user.id", :"user.name", :"user.profile.id", :"user.profile.introduction"], include: ["user", "user.profile"]
  end
end

class UsersController < ApplicationController
  include ActionController::Serialization

  def index
    users = User.all
    render json: users, fields: [], include: { profile: { fields: [:introduction] } }
  end

  def show
    user = User.find(params[:id])
    render json: user, fields: [], include: { profile: { fields: [:introduction] } }
  end
end

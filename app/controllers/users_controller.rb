class UsersController < ApplicationController
  include ActionController::Serialization

  def show
    user = User.find(params[:id])
    render json: user, fields: []
  end
end

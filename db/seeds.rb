# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(name: "Kento")
user2 = User.create!(name: "Taro")

user1.create_profile(introduction: "My name is Kento!")
user2.create_profile(introduction: "Hello, I'm Taro.")

post1 = Post.create!(title: "Kento's post 1", description: "Awesome post", user: user1)
post2 = Post.create!(title: "Kento's post 2", description: "Awesome post again", user: user1)

user1.profile.update_attributes!(cover_post: post1)

post3 = Post.create!(title: "Taro's post 1", description: "Cool post", user: user2)

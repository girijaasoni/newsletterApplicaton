# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Article.destroy_all

Article.create!([{
                  creator: "John Watson",
                  title: "Ruby on Rails with PostgreSQL",
                  body: "This is the main body of the article."
                },
                 {
                   creator: "Shrek",
                   title: "Title of Shrek article",
                   body: "This is the main body of the article."
                 },
                 {
                   creator: "Emma",
                   title: "Title of Emmma article",
                   body: "This is the main body of the article."
                 }])

Rails.logger.debug { "Created #{Article.count} Articles." }
User.destroy_all

User.create!([{
                  username: "user#1"
                },
                 {
                   username: "user#2"
                 },
                 {
                   username: "user#3"
                 }])

Rails.logger.debug { "Created #{User.count} Users." }

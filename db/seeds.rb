# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Article.destroy_all

Article.create!([{
                  creator_name: "John Watson",
                  article_title: "Ruby on Rails with PostgreSQL",
                  article_body: "This is the main body of the article."
                },
                 {
                   creator_name: "Shrek",
                   article_title: "Title of Shrek article",
                   article_body: "This is the main body of the article."
                 },
                 {
                   creator_name: "Emma",
                   article_title: "Title of Emmma article",
                   article_body: "This is the main body of the article."
                 }])

Rails.logger.debug { "Created #{Article.count} Articles." }

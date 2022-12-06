class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :creator_name
      t.string :article_title
      t.text :article_body

      t.timestamps
    end
  end
end

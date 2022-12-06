json.extract! article, :id, :creator_name, :article_title, :article_body, :created_at, :updated_at
json.url article_url(article, format: :json)

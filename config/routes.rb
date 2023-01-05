Rails.application.routes.draw do
  root "root#index"
  get '/fullArticle/:id', to: 'root#index'
  resources :articles
end



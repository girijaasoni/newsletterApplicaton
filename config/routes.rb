Rails.application.routes.draw do
  resources :articles
  root "root#index"
end

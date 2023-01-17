Rails.application.routes.draw do
  root "root#index"
  resources :articles
end


Rails.application.routes.draw do
  root 'posts#index'

  resources :posts do
  end

  get 'posts/tags/:name' => "posts#tags", as: :tags_posts
end

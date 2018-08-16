Rails.application.routes.draw do
  get 'home/top'
  get 'setting/top'
  get 'setting/help'
  get 'setting/about'
  get 'setting/sort'

  get 'dig/task' => "tasks#dig"
  devise_for :users
  resources :tasks
  get "home/top" => "home#top"
  get "/"=>"home#top"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

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

  devise_scope :user do
       get '/users/sign_out' => 'devise/sessions#destroy'
     end
   authenticated :users do
        root :to => "tasks#index"
    end

    unauthenticated :users do
        root :to => "home#top"
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

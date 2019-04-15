Rails.application.routes.draw do
  resources :items, only: [:index, :create, :update]
  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

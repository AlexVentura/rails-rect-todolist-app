class WelcomeController < ApplicationController
  def index
    render 'index.html', layout: false
  end
end

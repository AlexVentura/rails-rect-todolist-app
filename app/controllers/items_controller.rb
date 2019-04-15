class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end

  private

  def item_params
    params.require(:item).permit(:description, :is_done)
  end
end

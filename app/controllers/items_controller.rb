class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end

  def create
    item = Item.new(item_params)
    if item.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ItemSerializer.new(item)
      ).serializable_hash

      ActionCable.server.broadcast 'items_channel', serialized_data
      head :ok
    end
  end

  private

  def item_params
    params.require(:item).permit(:description, :is_done)
  end
end

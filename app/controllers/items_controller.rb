class ItemsController < ApplicationController
  before_action :set_item, only: [:update]

  def index
    items = Item.pending
    render json: items
  end

  def create
    item = Item.new(item_params)

    if item.save
      #serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #ItemSerializer.new(item)
      #).serializable_hash
      serialized_data = Item.pending
      serialized_data.to_json

      ActionCable.server.broadcast 'items_channel', serialized_data
      head :ok
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      #serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #Item.pending
      #).serializable_hash
      serialized_data = Item.pending
      serialized_data.to_json

      ActionCable.server.broadcast 'items_channel', serialized_data
      head :ok
    else
      render :edit
    end
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:description, :is_done)
  end
end

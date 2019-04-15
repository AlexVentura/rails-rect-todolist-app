class BoardChannel < ApplicationCable::Channel
  def subscribed
     stream_from 'board_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def add(data)
    item = Item.create(description: data['description'])
    socket = { description: item.description, is_done: item.is_done }
    BoardChannel.broadcast_to('board_channel', socket)
  end
end

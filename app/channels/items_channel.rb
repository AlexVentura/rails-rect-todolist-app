class ItemsChannel < ApplicationCable::Channel
  def subscribed
     stream_from 'items_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

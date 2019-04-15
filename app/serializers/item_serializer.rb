class ItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :is_done
end

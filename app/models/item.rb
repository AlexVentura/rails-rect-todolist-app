class Item < ApplicationRecord
  scope :pending, -> { where(is_done: false) }
end

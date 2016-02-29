class Tag < ApplicationRecord
  scope :hot_tags, -> { order('taggings_count desc') }
end

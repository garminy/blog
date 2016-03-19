json.tag do
  json.name @tag.name
  json.taggings_count @tag.taggings_count
end

json.posts @posts do |post|
  json.extract! post, :id, :title
  json.content post.content.truncate(120)
  json.created_at post.created_at.to_date
  json.tag_list post.tag_list.join(' · ')
  json.url post_url(post)
end

json.preview_posts @preview_posts do |post|
  json.extract! post, :id, :title
  json.content post.content.truncate(120)
  json.url post_url(post)
end

json.tags @tags do |tag|
  # json.extract! tag, :name, :taggings_count
  json.name tag.name
  json.taggings_count tag.taggings_count
  json.url tags_posts_path(tag.name)
end

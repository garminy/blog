json.post do
  json.title @post.title
  json.user_id @post.user_id
  json.content @post.content
  json.tag_list @post.tag_list.join(' · ')
  json.created_at @post.created_at.to_date
end

json.posts @posts do |post|
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

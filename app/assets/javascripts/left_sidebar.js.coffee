# JavaScript for left sidebar
# 
$.bind_left_sidebar = ->
  $(document).delegate '#icons-bar .icon-item', 'click', ->
    target = $(this).data('item')

  set_left_sidebar_margin()
  bind_sidebar_icons()
  $(window).resize(set_left_sidebar_margin())

set_left_sidebar_margin = ->
  window_height = $(window).height()
  $(".icons-bar, .side-details", $('#left_sidebar')).height(window_height)
  $('#icons-bar .icon-item:first').css
    margin: "#{window_height / 2 - 100}px 0 0"

bind_sidebar_icons = ->
  $('#icon_tags').click ->
    if !$(this).hasClass('chosen')
      $('#tags_bar').animate({left: '0px'}, 200)
      clear_icon_chosen()
      $(this).addClass('chosen')

  $('#icon_articles').click ->
    if !$(this).hasClass('chosen')
      $('#tags_bar').animate({left: '-200px'}, 200)
      clear_icon_chosen()
      $(this).addClass('chosen')

clear_icon_chosen = ->
  $('#icons-bar .icon-item').removeClass('chosen')

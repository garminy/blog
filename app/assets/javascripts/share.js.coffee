jQuery ->
  scrollbarWidth = ->
    if width == undefined
      parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body')
      child=parent.children()
      width=child.innerWidth()-child.height(99).innerWidth()
      parent.remove()
    width

  $.reset_container_size = ->
    $('#container').width($(window).width() - $('#left_sidebar').outerWidth() - scrollbarWidth())
    $
  
  $.show_container = (speed)->
    $('#container').slideDown(speed || 'normal')
  
  # $(window).resize(reset_container_size)

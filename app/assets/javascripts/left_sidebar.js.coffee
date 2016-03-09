# JavaScript for left sidebar
jQuery ->
  # variables

  # methods
  $.bind_left_sidebar = ->
    set_left_sidebar_margin()
    bind_sidebar_icons()
    bind_return()

    $(window).resize(set_left_sidebar_margin)

  set_left_sidebar_margin = ->
    document_height = $(document).height()
    window_height = $(window).height()
    $('#left_sidebar .icons-bar, #left_sidebar').animate({ left: 0 }, 150, ->
      setTimeout ->
        $('#left_sidebar .side-details').height(document_height)
        $('#left_sidebar .icons-bar, #left_sidebar').height(document_height)

        $.show_container('fast', ->
          document_height = $(document).height()
          window_height = $(window).height()

          $('#left_sidebar .side-details').height(document_height).fadeIn()
          $('#left_sidebar .icons-bar, #left_sidebar').height(document_height)
          $.reset_container_size()
        )
      , 150
    )
    $('#icons-bar .icon-items').css
      margin: "#{window_height / 2 - 35}px 0 0"

  bind_sidebar_icons = ->
    sidebar_width = $('#tags_bar').width()
    $('#icon_tags').click ->
      if !$(this).hasClass('chosen')
        $('#mask').fadeIn('fast')
        $('#tags_bar').animate({left: '0px'}, 130)
        show_left_sidebar()
        clear_icon_chosen()
        $(this).addClass('chosen')

    $(document).delegate '#icon_articles', 'click', ->
      if !$(this).hasClass('chosen')
        $('#mask').fadeOut('fast')
        $('#tags_bar').animate({left: -sidebar_width}, 130)
        show_left_sidebar()
        clear_icon_chosen()
        $(this).addClass('chosen')

  clear_icon_chosen = ->
    $('#icons-bar .icon-item').removeClass('chosen')

  show_left_sidebar = ->
    left_sidebar = $('#left_sidebar')
    left_sidebar.animate({ marginLeft: 0 }, 150)
    $('#main_title').animate({ width: $(document).width() - $('#icons-bar').width() - 260 }, 150)

  hide_left_sidebar = ->
    left_sidebar = $('#left_sidebar')
    left_sidebar_width = left_sidebar.width()
    left_sidebar.animate({ marginLeft: -left_sidebar_width + 46 }, 150)
    $('#main_title').animate({ width: $(document).width() - $('#icons-bar').width() }, 150)
    # clear_icon_chosen()

  bind_return = ->
    $(document).delegate '.sidebar-return', 'click', ->
      left_sidebar = $('#left_sidebar')
      if parseInt(left_sidebar.css('marginLeft')) < 0
        show_left_sidebar()
      else
        hide_left_sidebar()

$.fn.add_mask = ->
  if $(this).find('.mask').size() == 0
    mask = $("<div>").addClass('mask').css(
      position: 'absolute'
      width: '100%'
      height: '100%'
      background: 'white'
      opacity: '0.75'
      filter: 'alpha(opacity=75)'
      zIndex: 1000
    ).append($('<div>Loading...</div>').css(
      margin: '20% auto'
      textAlign: 'center'
      fontSize: '1.2em'
    ))
    $(this).prepend(mask)

$.fn.remove_mask = ->
  $(this).find('.mask').remove()

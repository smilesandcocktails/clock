$(document).ready(function() {

  var $hour = $('#hour')

  var $h1 = $('h1')
  $h1.html('<a href="http://www.google.com" target ="_blank"> link to google</a>')

  // target blank opens new window


  var $clock = $('#clock')
  var $h2 = $('<h2>').text('Cara Clock')
  $clock.append($h2) // "prepend" is the insertbefore

  console.log($clock.find('#second').attr('src'))

  var $grandUL = $('.GrandUl')
  $grandUl.first.find('.grandChildren').text()
  $grandUl.find('.grandChildren:nth-child(2)').text() OR
  $grandUl.first.find('.grandChildren').text() // console logs the specific child content

})

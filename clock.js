document.addEventListener('DOMContentLoaded', function() {

  var clock = document.querySelector('#clock')
  var seconds = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  var hour = document.querySelector('#hour')
  var secdeg = 0
  var mindeg = 0
  var hrdeg = 0

  setInterval(moveSeconds, 1000)
  setInterval(moveMinutes, 1000)
  setInterval(moveHour, 1000)

  function moveSeconds() {
    seconds.style.transform = "rotate(" + secdeg + "deg)"
    secdeg += 6
  }
})

  function moveMinutes () {
    minute.style.transform = "rotate(" + mindeg + "deg)"
    mindeg += 6
  }

  function moveHour () {
    hour.style.transform = "rotate(" + hrdeg + "deg)"
    hrdeg += 6
  }

document.addEventListener('DOMContentLoaded', function() {

  // var seconds = document.querySelector('#second')
  // var minute = document.querySelector('#minute')
  // var hour = document.querySelector('#hour')


var timeInterval = 1000
// var secondDegree = 6
var rotateDegree = 6
var hourDegree = 30
//
// //dynamic variable
var actualSecond = 0
//
//
// function secondRotation () {
//     console.log(actualSecond)
//     seconds.style.transform = "rotate(" + actualSecond * secondDegree + "deg)"
//     minuteRotate()
//     actualSecond++
// }
//
//
// function minuteRotate() {
//   var actualMinute = Math.floor(actualSecond/60)
//
//   console.log("Actual Minutes " + actualMinute)
//   minute.style.transform = "rotate(" + actualMinute * rotateDegree + "deg)"
//   hourRotate(actualMinute)
// }
// function hourRotate(min) {
//   var actualHour = Math.floor(min/60)
//   hour.style.transform = "rotate(" + actualHour * hourDegree + "deg)"
// }
// setInterval(secondRotation,timeInterval)

function runClock(second) {
  var time = new Date() // put inside the function so that it will check the time and output. but if we put outside, it just shows the same 1 time when consoled. (hoisting)
  updateTime('second', time.getSeconds(), rotateDegree)
  updateTime('minute', time.getMinutes(), rotateDegree)
  updateTime('hour', time.getHours(), hourDegree + time.getMinutes()/20)
  console.log(time)

  // secondRotation(time.getSeconds())
  // minRotation(time.getMinutes())
  // hrRotation(time.getMinutes())

  function updateTime(element, timeUnit, degree) {
    console.log('update the time element: ' + element + ' to ' + timeUnit)
    var clockElement = document.querySelector('#' + element)
    console.log(clockElement)
    clockElement.style.transform = "rotate(" + timeUnit * degree + "deg)"
  }

  var digitalClock = document.querySelector ('#digitalClock')
  digitalClock.textContent = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()

  // function secondRotation(sec){
  //   seconds.style.transform = "rotate(" + actualSecond * secondDegree + "deg)"
  // }
  //
  // function minRotation(min) {
  //   minute.style.transform = "rotate(" + actualMinute * rotateDegree + "deg)"
  // }
  //
  // function hrRotation(hr) {
  //   hour.style.transform = "rotate(" + actualHour * hourDegree + "deg)"
  // }

}

setInterval(runClock,1000)

})

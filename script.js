let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.pS')
let mElement = document.querySelector('.pM')
let hElement = document.querySelector('.pH')

function updateClock() {
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  digitalElement.innerHTML = `${fixedZero(hour)}:${fixedZero(minute)}:${fixedZero(second)}`

  let sDeg = ((360 / 60) * second) - 90

  sElement.style.transform = `rotate(${sDeg}deg)`

}

function fixedZero(time) {
  return time < 10 ? `0${time}` : time
}

setInterval(updateClock, 1000)

setInterval(showTime, 1000)

function showTime () {
  const date = new Date()
  let h = date.getHours() // 0 - 23
  let m = date.getMinutes() // 0 - 59
  let s = date.getSeconds() // 0 - 59

  let amPm = 'AM'
  if (h === 12) { amPm = 'PM' }
  if (h > 12) {
    h -= 12
    amPm = 'PM'
  }
  if (h === 0) {
    h = 12
    amPm = 'AM'
  }

  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m
  s = (s < 10) ? '0' + s : s

  const time = h + ':' + m + ':' + s + ' ' + amPm
  document.getElementById('MyClockDisplay').innerText = time
  document.getElementById('MyClockDisplay').textContent = time

  setTimeout(showTime, 1000)
}

showTime()


setTimeout((err, data) => {
  if (err) {
    console.log(err)
  } else {
    // alert('halo css-theme ?')
    data = 'test'
    console.log(`hello css theme ${data}`)
  }
}, 3000)

const darkButton = document.getElementById('dark')
const lightButton = document.getElementById('light')
const solarButton = document.getElementById('solar')
const body = document.body

darkButton.onclick = () => {
  body.classList.replace('light', 'dark')
}

lightButton.onclick = () => {
  body.classList.replace('dark', 'light')
}
solarButton.onclick = () => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar')
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize'
  } else {
    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar')
    solarButton.innerText = 'normalize'
  }
}

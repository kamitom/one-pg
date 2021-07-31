
setTimeout((err, data) => {
  if (err) {
    console.log(err)
  } else {
    // alert('halo css-theme ?')
    data = 'test'
    console.log(`hello css theme ${data}`)
  }
}, 3000)

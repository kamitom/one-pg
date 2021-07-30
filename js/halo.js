
console.log('hello, js!')

setTimeout((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('9秒後，notify Me !!')
    // alert(data)
    // alert('9 secs later, alert!')
  }
}, 9000)


console.log('hello, js!')

setTimeout((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('4秒後，notify Me !!')
    // alert(data)
    // alert('9 secs later, alert!')
  }
}, 4000)

const calculatePrice = (price, taxes, description) => {
  price = price ?? 0
  taxes = taxes ?? 0
  description = description ?? 'Default item'
  const total = price * (1 + taxes)

  console.log(`%c${description} With Tax: %c $${total}`,
    'font-weight: bold; font-size:1.5rem', 'font-weight: bold; font-size: 3rem;color: red')

  return total
}

calculatePrice(100, 0.8, 'appleII book')
calculatePrice(100, 0.4, 'apple watch')
calculatePrice(100, undefined, undefined)

const processData = () => {
  const xPrice = document.getElementById('price').value
  const xTaxes = document.getElementById('taxes').value

  const xTotal = calculatePrice(parseFloat(xPrice), parseFloat(xTaxes), undefined)
  document.getElementById('xtotal').value = parseInt(xTotal)
}

document.getElementById('btnTotal').onclick = () => {
  // alert(calculatePrice(xPrice, xTaxes, 'Macbook pro'))
  processData()
}

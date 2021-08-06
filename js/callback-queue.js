
console.log('starting')

setTimeout(() => {
  const objTime1 = new Date().toISOString().replace(/T/, ' ')
  console.log(`2 secs later ${objTime1}`)
}, 2000)

setTimeout(() => {
  const objTime2 = new Date().toISOString().replace(/T/, ' ')
  console.log(`0 sec later: ${objTime2}`)
}, 0)

setTimeout(() => {
  const objTime3 = new Date().toISOString().replace(/T/, ' ')
  console.log(`4 secs later: ${objTime3}`)
}, 4000)

console.log('stopped!')

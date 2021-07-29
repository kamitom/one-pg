
const fs = require('fs')

// console.log(fs)

// const file = fs.readFileSync('../README.md')
// console.log(file)

const file1 = fs.readFile('./README.md', (err, data) => {
  if (err) {
    console.log(`here is ${err}`)
  } else {
    console.log(`data is here: ${data}`) // 二進制直接轉為human readable..
  }
})

const arr = []
for (let i = 2; i <= 99999999; i += 2) {
  arr.push(i)
}
console.log(arr)

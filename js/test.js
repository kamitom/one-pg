
const fs = require('fs')

// console.log(fs)

// 同步
const file = fs.readFileSync('./README.md')
console.log(`同步的data: \n\n ${file}`)

// 非同步
const file1 = fs.readFile('./README.md', (err, data) => {
  if (err) {
    console.log(`here is ${err}`)
  } else {
    console.log(`非同步的data: \n\n ${data}`) // 二進制直接轉為human readable..
  }
})

const arr = []

for (let i = 2; i <= 9999; i += 2) {
  arr.push(i)
}
// console.log(`迴圈 result: \n\n ${arr}`)
console.log(arr)

// Recreate missing reference to require
import { createRequire } from 'module'

const require = createRequire(import.meta.url)


const express = require('express')
const { readFile } = require('fs/promises')

const app = express()

app.get('/', async (req, res) => {
  res.send(await readFile('./basic.html', 'utf8'))


  // res.send('hello, world')
})


app.listen(process.env.PORT || 3000, () => console.log('App4 Available on http://localhost:3000'))

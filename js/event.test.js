
import { EventEmitter } from 'events'
const eventEmitter = new EventEmitter()

eventEmitter.on('myTestEventName', () => {
  const dateObject = new Date()

  const amPm = (dateObject.getHours() >= 18) ? 'Good Evening!' : 'Good Morning!!'

  console.log(`Halo, ${amPm}`)
})

eventEmitter.emit('myTestEventName')
eventEmitter.emit('myTestEventName')

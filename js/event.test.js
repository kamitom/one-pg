
import { EventEmitter } from 'events'
import faker from 'faker'
const eventEmitter = new EventEmitter()

eventEmitter.on('myTestEventName', () => {
  const dateObject = new Date()

  const fName = faker.name.findName()
  const amOrPM = (dateObject.getHours() >= 18) ? 'Good Evening!' : 'Good Morning!!'

  console.log(`Halo ${fName}, ${amOrPM}`)
})

eventEmitter.emit('myTestEventName')
eventEmitter.emit('myTestEventName')

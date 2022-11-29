// const { EventEmitter } = require('events')

// const ev = new EventEmitter()


// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você: ', message)
// })

// // ev.once => ora apenas uma vez
// // ev.on => dispara todos os eventos

// ev.emit('saySomething', 'Bruno')
// ev.emit('saySomething', 'Eduardo')
// ev.emit('saySomething', 'Gael')

const { inherits } = require('util')
const { EventEmitter } = require('events')


function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')

chapolin.emit('help')
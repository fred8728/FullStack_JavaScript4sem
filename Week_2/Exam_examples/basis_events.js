
const EventEmitter = require( 'events' ); //class
const emitter = new EventEmitter(); //object of eventmitter

//emit - making a noise, produce --> signalling 

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called')
})

//Raised an event
emitter.emit('messageLogged')


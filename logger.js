const EventEmitter = require('events') // Load EventEmitter class from node events module. 
//const emitter = new EventEmitter(); //Create object from EventEmitter class 

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        // Raise event - make a noise - signaling that event has happened.
        // Order is important, you have to add listener before emit the event.
        // While emit an event you can send event arguments
        this.emit('messageLogged', {id:1,url:'http://'}); 
    }
}


module.exports = Logger;
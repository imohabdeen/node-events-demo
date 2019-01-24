
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter.

const EventEmitter = require('events') // Load EventEmitter class from node events module. 
const emitter = new EventEmitter(); //Create object from EventEmitter class 

- To create a class with the ability to raise events, we should extend EventEmitter
class Logger extends EventEmitter { 

 }

- Register a listener (Do something when a event has been raised)
- To register a listen you have to use on method or addEventListener & for both methods you have to pass two arguments the first argument is the event name and the second argument is a callback function

 emitter.on('messageLogged',function(arg){ // arg = e == eventArg
     console.log('Listener Called',arg);
 });
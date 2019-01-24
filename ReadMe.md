
# Node Events in simple words

- Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

- For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

- All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

- When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter.

```javascript
    // Load EventEmitter class from node events module. 
    const EventEmitter = require('events') 
    //Create object from EventEmitter class
    const emitter = new EventEmitter();  
```

- To create a class with the ability to raise events, we should extend EventEmitter
    class Logger extends EventEmitter { }

- Register a listener (Do something when a event has been raised)
- To register a listen you have to use on method or addEventListener & for both methods you have to pass two arguments the first argument is the event name and th  e second argument is a callback function.

```javascript
 emitter.on('messageLogged',function(arg){ // arg = e == eventArg
     console.log('Listener Called',arg);
 });
 ```
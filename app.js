const Logger = require('./logger'); // Import Logger class from logger module.
const logger = new Logger(); // Create logger object from Logger class.

// register to messageLogged event of logger class
logger.on('messageLogged',(arg) => { // arg = e == eventArg
    console.log('Listener Called',arg);
});

logger.log('Hello World');




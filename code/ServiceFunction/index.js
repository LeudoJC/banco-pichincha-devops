'use strict';

exports.handler = function(event, context, callback) {
    
    console.log('Received event:', JSON.stringify(event, null, 2));
    if (event.message === undefined || event.to === undefined || event.from === undefined || event.timeToLifeSec === undefined) {
        callback("400 Invalid status value");
    }
    
    let payload = {
        message: event.message,
        to: event.to,
        from: event.from,
        timeToLifeSec: Number(event.timeToLifeSec)
    };
    
    if (isNaN(event.timeToLifeSec)) {
        callback("401 Invalid input");
    }
    
    let response = {
        message: "Hello " + event.to + " your message will be send"
    };
    
    callback(null, response);
    
}
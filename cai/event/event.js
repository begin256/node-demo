// //event.js 文件
// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event 事件触发'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000); 



//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
var listener1=function listener1(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}
emitter.on('someEvent', listener1); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('first listener2', arg1, arg2); 
// });
emitter.once('someEvent', function(arg1, arg2) { 
    console.log('first listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
// emitter.removeListener('someEvent',listener1)
emitter.emit('someEvent', 'gaga', 'dada'); 
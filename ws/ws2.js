const WebSocket = require('ws');
 
const ws = new WebSocket('ws://localhost:8002');
 

////
// ws.on('open', function open() {
//   ws.send('something');
// });
 
// ws.on('message', function incoming(data) {
//   console.log(data);
// });


////
// ws.on('open', function open() {
//   const array = new Float32Array(5);
 
//   for (var i = 0; i < array.length; ++i) {
//     array[i] = i / 2;
//   }
 
//   ws.send(array);
// });



////
ws.on('open', function open() {
  console.log('connected');
  ws.send('Date.now()------------');
});
 
ws.on('close', function close() {
  console.log('disconnected');
});
 
ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: `);
 
  setTimeout(function timeout() {
    ws.send('new Date()+++++++++');
  }, 500);
});

 
const wss = new WebSocket.Server({
  port: 8002,
});
wss.on('connection',function(ws) {
    // console.log('conn')
    ws.on('message',function(message){
        console.log('received:'+ message)
    })
    ws.send('server send')
})
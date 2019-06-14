const WebSocket = require('ws');
let count=0
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
  console.log(ws.readyState)
});
 
ws.on('close', function close() {
  console.log('disconnected');
  console.log(ws.readyState)
});
 
ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: `);
 count++
 console.log(`${data}`)
 console.log(count)
 console.log(ws.readyState)
 if(count>3){
   ws.send('bye')
   ws.close()
 } else {
    setTimeout(() => {
      ws.send('new Date()+++++++++ '+`${count}`);
    }, 1000);
  }
});

 //server
const wss = new WebSocket.Server({
  port: 8002,
});
wss.on('connection',function(ws) {
    // console.log('conn')
    ws.on('message',function(message){
        console.log('received:'+ message)
        console.log(ws.readyState)
        ws.send('server send', (err) => {
          if (err) {
              console.log(`[SERVER] error: ${err}`);
          }
        }
        )
    })
    
})
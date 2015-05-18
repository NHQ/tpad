sp = require('serialport')
SP = sp.SerialPort
port = new SP('/dev/ttyACM0')
var buf = new Float32Array(1204 * 2 * 2 * 2)

port.on('open', function(){
console.log('open')
for(x = 0; x<buf.length;x++){
  buf[x] = synth(x/48000)
}
})

port.on('data', function(data, x){
  data = data.toString().split(',')[1]
  
  console.log(data) 
})

function synth(t){
  return Math.sin(440 * t * Math.PI * 2) 
}



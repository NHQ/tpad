var baudio = require('baudio')()
sp = require('serialport')
SP = sp.SerialPort
port = new SP('/dev/tty.usbmodemfa141')
var tpad = []
port.on('data', function(data){

  data = data.toString().split(',')[1]
  tpad[0] = (Number(data) / 18560) || 0
  console.log(tpad[0]) 
})

baudio.push(synth)
baudio.play()



function synth(t){
  return Math.sin(440 * t * Math.PI * 2) * tpad[0] / 2
}



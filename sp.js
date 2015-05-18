midi = require('midi')

output = new midi.output()

output.openVirtualPort('guitarai')

input = new midi.input()

input.openVirtualPort(input.getPortName(0))

input.on('message', function(t, m){
  console.log(t, m)
})

setTimeout(function(){
  output.sendMessage([127, 20, 1])
  }, 1000)

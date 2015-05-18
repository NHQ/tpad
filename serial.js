var serial = require('./lib/serial.js')
var Tpad = require('./lib/tpad')
serial.init()

serial.on('connected', function(cnf){
  var tpad = new Tpad(cnf)
  tpad.each(function(button, i){

    var pressed = false
    button.on('depress', function(d){
      var x = 0
      if(pressed) return
      else{
        pressed = true
        setInterval(function(){
          pressed = false
        }, 250)
        // firing 4 times:
        console.log(d.value / 18500, d.index, Date.now(), ++x)
      }
    })
  })
})


// handles client side events and send data to server
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {//w
      io.emit('w');
    }else if(event.keyCode == 65) {//a
      io.emit('a');
    }else if(event.keyCode == 83) {//s
      io.emit('s');
    }else if(event.keyCode == 68) {//d
      io.emit('d');
    }
})


//listen for log-in prompt
io.on('log-in request', function() {
  var nm = prompt("Please enter name");
  var pswrd = prompt("Please enter password");
  var name = nm;
  var password = pswrd;
  io.emit('log-in responce', name, password);
})
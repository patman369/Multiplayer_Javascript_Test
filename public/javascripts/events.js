// handles client side events and send data to server

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
    }else if(event.keyCode == 65) {
    }else if(event.keyCode == 83) {
    }else if(event.keyCode == 68) {
    }else{
      return 0;
    }
})

document.addEventListener('click', function() {
  var msg = "message";
  io.emit('req', msg);
})
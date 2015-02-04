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
console.log("listeners loaded");

module.exports = function(sio) {
  sio.on('connection', function(socket) {
    socket.on('disconnect', function() {
      
    });
  });
}
//this file holds the game itself
console.log("game core loaded");

module.exports = function(sio) {

  //constants

 

  //main functions
  function sendUpdate() {
    var gameState = 0; //mock gameState
    sio.emit('gameState', gameState);
  }
  
  //client listeners
  module.exports = function(sio) {
    sio.on('connection', function(socket) {
      socket.on('disconnect', function() {

      });
    });
  }
  
  
  //main loop
  function main() {
    setInterval(function() {
      sendUpdate();
    }, 100);
  }
  
  //start main loop
  main();
}
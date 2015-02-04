//this file holds the game itself
console.log("game core loaded");

module.exports = function(sio) {

  //constants

  //game variables
  var background;
  var backgroundObj = [];
  var bottomParticalObj = [];
  var collisionObj = [];
  var topParticalObj = [];

  //main functions

  function sendUpdate() {
    var gameState = 0; //mock gameState
    sio.emit('gameState', gameState);
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
//this file holds the game itself
console.log("game core loaded");

module.exports = function(sio, graphics, navigation, room, ship) {

  //temporary player array
  var names = [];
  var passwords = [];
  //test room
  var nav = new navigation(200, 200, 0, 0, 0);
  var graph = new graphics(200, 200, '/resources/spaceshipImage.png');
  var turretLocations = [];
  var starship = new ship(nav, graph, 1000, 2000, 500, turretLocations, 'patman');
  var rm = new room();
  rm.collisionObj[0] = starship;

  //sets game state and sends it to client
  function sendUpdate() {
    var gameState = rm; //gameState
    sio.emit('gameState', gameState);
  }
  
  //main loop
  function main() {
    setInterval(function() {
      rm.collisionObj[0].update(); //set update for all objects from each layer
      sendUpdate();
    }, 10);
  }
  
  //client-event listeners
  sio.on('connection', function(socket) {
    
    //initial log-in request & responce
    sio.emit('log-in request');
    socket.on('log-in responce', function(name, password) {
      console.log(name+' joined the game!');
      names.push(name);
      passwords.push(password);
      console.log(name+' '+passwords);
    });

    //player controls
    socket.on('w', function() {
      rm.collisionObj[0].nav.V += 1;
    });
    socket.on('a', function() {
      rm.collisionObj[0].nav.heading -= 10;
    });
    socket.on('s', function() {
      rm.collisionObj[0].nav.V -= 1;
    });
    socket.on('d', function() {
      rm.collisionObj[0].nav.heading += 10;
    });
  });
  
  //start main loop
  main();
}
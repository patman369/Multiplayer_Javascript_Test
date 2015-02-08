//this file holds the game itself
console.log("info: game core loaded");

module.exports = function(sio, rooms, ships) {

  //temporary player array
  var login = [];
  //test room
  var rm = new rooms.room();
  
  
  rm.collisionObj[rm.collisionObj.length]= new ships.testShip(200, 200, 'admin');
  
  //sets game state and sends it to client
  function sendUpdate() {
    var gameState = rm; //gameState
    sio.emit('gameState', gameState);
  }
  
  //main loop
  function main() {
    setInterval(function() {
        for (var i=0; i<rm.collisionObj.length; i++) {//set update for all objects from each layer
          rm.collisionObj[i].update(); 
        }
      sendUpdate();
    }, 10);
  }
  
  //CLIENT-SERVER LISTENER SOCKET
  sio.on('connection', function(socket) {//REPLACE rm WITH FULL GAME STATE LATER
    //initial log-in request & responce
    sio.emit('login request');
    socket.on('login responce', function(nm) {
      console.log(nm+' joined the game!');
      login.push(nm);
      this.name = nm;
      
      //give player ship if he/she dousn't already own one
      rm.collisionObj[rm.collisionObj.length] = new ships.testShip(200, 200, this.name);
    });

    //player controls
    //will move ship if logged in as owner
    socket.on('w', function() {
      for (var i=0; i<rm.collisionObj.length; i++) {
        if (rm.collisionObj[i].owner === this.name) {
          rm.collisionObj[i].move('forward');
        }
      }
    });
    socket.on('a', function() {
      for (var i=0; i<rm.collisionObj.length; i++) {
        if (rm.collisionObj[i].owner === this.name) {
          rm.collisionObj[i].turn('left');
        }
      }
    });
    socket.on('s', function() {
      for (var i=0; i<rm.collisionObj.length; i++) {
        if (rm.collisionObj[i].owner === this.name) {
          rm.collisionObj[i].move('back');
        }
      }
    });
    socket.on('d', function() {
      for (var i=0; i<rm.collisionObj.length; i++) {
        if (rm.collisionObj[i].owner === this.name) {
          rm.collisionObj[i].turn('right');
        }
      }
    });
    //map key
    socket.on('m', function() {
      //send map info
    });
  });
  
  //start main loop
  main();
}
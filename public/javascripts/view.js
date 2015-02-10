function view() {
  var view_x = 0;
  var view_y = 0;
  var currentSystem = 'Alpha';
  
  //background image variable
  var backgroundImg = new Image();
  backgroundImg.src = '/resources/Background.jpg';
  
  this.setCurrentSystem = function(system) {
    currentSystem = system;
  }
  
  this.update = function(gameState) {
    for (var s=0; s<gameState.systems.length; s++) {//set update for all objects from each layer
      for (var i=0; i<gameState.systems[s].collisionObj.length; i++) {
        if (gameState.systems[s].collisionObj[i].owner === name && gameState.systems[s].collisionObj[i].isSelected === true) {
          view_x = gameState.systems[s].collisionObj[i].x-(window.innerWidth/2);
          view_y = gameState.systems[s].collisionObj[i].y-(window.innerHeight/2);
        }    
      }
    }
  }
  
  this.render = function(gameState) { //Clear canvas and render game state from socket
    //resize canvas
    var WIDTH  = window.innerWidth;
    var HEIGHT = window.innerHeight;
    ctx.canvas.width  = WIDTH;
    ctx.canvas.height = HEIGHT;

    //draw background image
    ctx.drawImage(backgroundImg, 0, 0, WIDTH, HEIGHT);

    for (var s=0; s<gameState.systems.length; s++) {//set update for all objects from each layer
      if (gameState.systems[s].name == currentSystem) {
        for (var i=0; i<gameState.systems[s].collisionObj.length; i++) {//get game state (this might need cleaning)
          var x = gameState.systems[s].collisionObj[i].x-view_x;
          var y = gameState.systems[s].collisionObj[i].y-view_y;
          var heading = gameState.systems[s].collisionObj[i].heading;
          var length = gameState.systems[s].collisionObj[i].length;
          var width = gameState.systems[s].collisionObj[i].width;
          var imageSrc = gameState.systems[s].collisionObj[i].imageSrc;

          //render state
          var img = new Image();
          img.src = imageSrc;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(heading*Math.PI/180);
          ctx.translate(-(width/2), -(length/2));
          ctx.drawImage(img, 0, 0, width, length);
          ctx.restore();
        }
      }
    }
  }
}
function view() {
  var view_x = 0;
  var view_y = 0;
    
  var backgroundImg = new Image();
  backgroundImg.src = '/resources/Background.jpg';
  
  
  this.update = function(gameState) {
    for (var i=0; i<gameState.collisionObj.length; i++) {
      if (gameState.collisionObj[i].owner === name && gameState.collisionObj[i].isSelected === true) {
        view_x = gameState.collisionObj[i].x-(window.innerWidth/2);
        view_y = gameState.collisionObj[i].y-(window.innerHeight/2);
      }
    }
  }
  
  this.render = function(gameState) { //Clear canvas and render game state from socket
    //resize canvas
    var WIDTH  = window.innerWidth;
    var HEIGHT = window.innerHeight;
    ctx.canvas.width  = WIDTH;
    ctx.canvas.height = HEIGHT;

    //fill canvas
    ctx.drawImage(backgroundImg, 0, 0, window.innerWidth, window.innerHeight);

    for (var i=0; i<gameState.collisionObj.length; i++) {//get game state (this might need cleaning)
      var x = gameState.collisionObj[i].x-view_x;
      var y = gameState.collisionObj[i].y-view_y;
      var heading = gameState.collisionObj[i].heading;
      var length = gameState.collisionObj[i].length;
      var width = gameState.collisionObj[i].width;
      var imageSrc = gameState.collisionObj[i].imageSrc;

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
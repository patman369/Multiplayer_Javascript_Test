//constants
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var io = io();

//get game state and render to canvas
io.on('gameState', function(state) {
    var gameState = state;
    render(gameState);
});

//Clear canvas and render game state from socket
function render(gameState) { //NEEDS TO RENDER ALL ITEMS
  //resize canvas
  var WIDTH  = window.innerWidth;
  var HEIGHT = window.innerHeight;
  ctx.canvas.width  = WIDTH;
  ctx.canvas.height = HEIGHT;
  
  //fill canvas
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
  //get game state
  var x = gameState.collisionObj[0].nav.x;
  var y = gameState.collisionObj[0].nav.y;
  var heading = gameState.collisionObj[0].nav.heading;
  var length = gameState.collisionObj[0].graphics.length;
  var width = gameState.collisionObj[0].graphics.width;
  var imageSrc = gameState.collisionObj[0].graphics.imageSrc;
  
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
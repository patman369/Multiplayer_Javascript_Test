//constants
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var io = io();

//Game elements
var gameState;

//Starts the loop
function main() {
  window.setInterval(function() {
    render();
  }, 100);
}

//get game state JSON and parse it
io.on('gameState', function(state) {
    gameState = state;
});

//Clear canvas and render game state from socket
function render() {
  //resize canvas
  var WIDTH  = window.innerWidth;
  var HEIGHT = window.innerHeight;
  ctx.canvas.width  = WIDTH;
  ctx.canvas.height = HEIGHT;
  //fill canvas
  
  
  //render game state
  
}

// start and run
main();
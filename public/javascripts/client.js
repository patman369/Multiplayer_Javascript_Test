//constants
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var io = io();
var view = new view();
//game variables
var loggedIn = false;
var name;

//get game state and render to canvas
io.on('gameState', function(state) {
    var gameState = state;
    view.update(gameState);
    view.render(gameState);
});


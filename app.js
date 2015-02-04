//working port
var gameport = process.env.PORT || 3000;

//import dependencies
var express = require('express');
var io = require('socket.io');
var UUID = require('node-uuid');
var http = require('http');

//create server
var app = express();
var server = http.Server(app);

//sends static files when connecting to home directory
app.use('/', express.static(__dirname + '/public'));

//Create a socket.io instance using server
var sio = io.listen(server);
//load core game files
var socketListeners = require('./game_socketListeners.js')(sio);
//load game systems
var graphics = require('./game_systems/graphics.js');
var navigation = require('./game_systems/navigation.js');
//load game object classes
var room = require('./object_class/room.js');
var ship = require('./object_class/ship.js');


//start core
var core = require('./game_core.js')(sio, socketListeners);

server.listen(gameport, function(){
  console.log('listening on ' + gameport);
});

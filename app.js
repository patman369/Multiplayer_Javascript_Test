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
//load game object classes
var rooms = require('./core_objects/rooms.js');
var ships = require('./collision_objects/ships.js');
//start core
var core = require('./game_core.js')(sio, rooms, ships);

server.listen(gameport, function(){
  console.log('listening on ' + gameport);
});

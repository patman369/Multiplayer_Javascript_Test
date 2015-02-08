console.log("info: ship class loaded");

exports.testShip = function(x, y, owner) {
  //base stats
  var health = 100;
  var sheild = 0;  
  //game variables
  var turretLocations = [];
  var shipItems = [];
  this.isSelected = true;
  //navigation variables
  this.x = x;
  this.y = y;
  this.V = 0;
  this.maxV = 1.5;
  this.heading = 0;
  this.headingV = 0;
  this.maneuverability = 0.1;
  //graphics variables
  this.length = 100;
  this.width = 80;
  this.imageSrc = '/resources/spaceshipImage.png';
  //owner
  this.owner = owner;
  
  //ship methods
  this.move = function (direction) {
    if (direction === 'forward') {
      if (this.maxV > this.V) { 
        this.V += 0.5;
      }
    }else{
      if (-0.5 < this.V) { 
        this.V -= 0.5;
      }
    }
  }
  
  this.turn = function (direction) {
    if (direction === 'right') {
      if (this.headingV < this.maneuverability) {
        this.headingV += this.maneuverability;
      }
    }else{
      if (this.headingV > -this.maneuverability) {
        this.headingV -= this.maneuverability;
      }
    }
  }
  
  //update game logic
  this.update = function() {
    //move in velocity direction
    this.x += this.V*(Math.sin((this.heading)*(Math.PI/180)));
    this.y -= this.V*(Math.cos((this.heading)*(Math.PI/180)));
    this.heading += this.headingV;
    //check item objects
    for (var i=0; shipItems<i; i++) {
      
    }
  }
}
console.log("ship class loaded");

function spaceShip(navObj, graphicsObj, hullSpace, hullHealth, hullCost, turretLocations, owner) {
  //navigation object
  this.nav = navObj;
  //graphics object
  this.graphics = graphicsObj;
  //ship hull variables
  this.hullSpace = hullSpace;
  this.hullHealth = hullHealth;
  this.hullCost = hullCost;
  this.turretLocations = turretLocations;
  this.hullItems = [];
  //owner
  this.owner = owner;
  
  //object methods
  this.update = function() {
    //angle coming in degrees become radians
    this.nav.x += this.nav.V*(Math.sin((this.nav.heading)*(Math.PI/180)));
    this.nav.y -= this.nav.V*(Math.cos((this.nav.heading)*(Math.PI/180)));
  }
}

module.exports = spaceShip;
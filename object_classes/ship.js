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
  
}

module.exports = spaceShip;
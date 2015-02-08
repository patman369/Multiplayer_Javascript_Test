console.log("info: astroid class loaded");
//code to spawn an astroid
exports.astroid = function(x, y, headingV) {

  this.x = x;
  this.y = y;
  this.heading = 0;
  this.headingV = headingV;
  
  //update game logic
  this.update = function() {
    //angle coming in degrees become radians
    this.x += this.V*(Math.sin((this.heading)*(Math.PI/180)));
    this.y -= this.V*(Math.cos((this.heading)*(Math.PI/180)));
    
    this.heading += this.headingV;
  }
}
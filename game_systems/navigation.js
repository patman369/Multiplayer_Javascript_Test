console.log('navigation class loaded');

function navigation(x, y, V, maxV, heading) {
  //navigation variables
  this.x = x;
  this.y = y;
  this.V = V;
  this.maxV = maxV;
  this.heading = heading;
}

module.exports = navigation;
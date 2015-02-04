console.log('navigation class loaded');

function navigation(x, y, V, maxV, angleHeading) {
  //navigation variables
  this.x = x;
  this.y = y;
  this.V = V;
  this.maxV = maxV;
  this.angleHeading = angleHeading;
}

module.exports = navigation;
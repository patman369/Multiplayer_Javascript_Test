console.log('graphics class loaded');

function graphics(length, width, imageSrc) {
  //graphics variables
  this.length = length;
  this.width = width;
  this.imageSrc = imageSrc;
}

module.exports = graphics;

function cat(color, breed) {
  this.furColor = color,
  this.catBreed = breed
};

cat.prototype.catType = function () {
  return this.furColor + " " + this.catBreed;
}

var cat1 = new cat('Black & White', 'Forest Cat');

console.log(cat1);

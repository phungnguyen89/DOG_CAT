function Mouse(name) {
  this.name = name;
  this.dead = false;
}
function moust1() {
  return "dsajdhsa";
}

Mouse.prototype.die = function () {
  this.dead = true;
};
module.exports = Mouse;

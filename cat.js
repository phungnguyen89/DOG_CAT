function cat() {
  this.stomach = "dsa";
  return "cat";
}

cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
};
module.exports = cat;

function Dog() {
  this.stomach = [];
}

function test() {
  return "test";
}
Dog.prototype.eat = (cat) => {
  this.stomach.push(cat);
};

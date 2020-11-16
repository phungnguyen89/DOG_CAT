const chalk = require("chalk");
function Dog(name) {
  this.name = name;
  this.stomach = [];
}

function test() {
  return "test";
}
Dog.prototype.eat = (cat) => {
  this.stomach.push(cat);
};

Dog.prototype.sayHi = () => {
  console.log("hi, im dog" + chalk.blue(this.name));
};

module.exports = Dog;

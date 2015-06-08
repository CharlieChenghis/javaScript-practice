Function.prototype.myBind = function(context)
{
	var fn = this
	return function(){fn.apply(context)}
}

var Cat = function (name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(this.name + " says meow!");
};

var curie = new Cat("Curie")
setTimeout(curie.meow.myBind(curie), 1000);
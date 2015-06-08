"use strict"

var gar = new Cat("Garfield","Jon")
var salem = new Cat("Salem","Sabrina")

function Cat(name, owner)
{
	this.name = name
	this.owner = owner
	x = "Meow"

	// this.cuteStatement = function(){
	// 	return this.owner + " loves " + this.name
	// }
}




// salem.meow = function()
// {


// 	return "woof woof"
// }

Cat.prototype.cuteStatement = function()
{
	x = 1
	return this.owner + " loves " + this.name
}

Cat.prototype.meow = function()
{
	x = something



	return x + "meow"
}

function Dog(owner, name)
{
	this.owner = owner
	this.name = name

	this.woof = function()
	{
		return this.name + " says woof woof woof"
	}
}

var scooby = new Dog("shaggy","scooby")
// console.log(scooby.woof())
// console.log(scooby.name)
console.log(gar.cuteStatement())
console.log(gar.meow())
// console.log(salem.meow())

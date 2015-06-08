function foo(n, fun)
{
	// console.log(this)
	if (n) {fun(); };
}

function Human()
{
	this.name = "Charlie"
}


function Dog()
{

}

Dog.prototype.bark = function()
{
	console.log(this)
	function barkAgain()
	{
		console.log(this)
	}
	barkAgain.call(this)
}

var bob = new Human()
var scooby = new Dog()

console.log(bob.name)

// foo(1,function(){}.bind(bob))
foo(1, scooby.bark.bind(bob))
// foo(2, scooby.bark.bind(scooby))

// foo.call(bob, 1,scooby.bark)
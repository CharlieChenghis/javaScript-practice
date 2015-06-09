Function.prototype.inherits = function(Parent)
{
	function Surrogate(){}
	Surrogate.prototype = Parent.prototype
	this.prototype = new Surrogate()
}

function Machines(name)
{
	this.name = name
}

Machines.prototype.saysName = function()
{
	console.log("this machine is called " + this.name)
}

function Car(name)
{
	Machines.call(this,name)
}

Car.inherits(Machines)

Car.prototype.says = function()
{
	console.log(this.name + "vrooooooom")
}



var z4 = new Car("z4")
z4.says()
z4.saysName()

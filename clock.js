function Clock()
{
	this.currentTime = new Date()
	this.hours = this.currentTime.getHours()
	this.minutes = this.currentTime.getMinutes()
	this.seconds = this.currentTime.getSeconds()
}

Clock.Tick = 5000;

Clock.prototype.printTime = function()
{
	return this.hours + ":" + this.minutes + ":" + this.seconds
}

Clock.prototype.run = function()
{
	console.log(clock.printTime())				
	this._tick()
}

Clock.prototype._tick = function()
{
	console.log(this)
	var self = this;
	window.setTimeout(function(){
		var addMinute = 0
		var addHour = 0
		if (self.seconds+5 >= 60) {
			addMinute = 1
		};
		self.seconds = (self.seconds + 5)%60

		if(self.minutes + addMinute >= 60){
			addHour = 1
		}
		self.minutes = (self.minutes+ addMinute)%60
		self.hours = (self.hours + addHour)%24
		self.run()
		console.log(this)
	}.bind(self), 1000)
	console.log(this)
}

var clock = new Clock()
clock.run()
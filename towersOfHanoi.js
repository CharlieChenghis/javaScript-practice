var readline = require('readline')
var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
function HanoiGame()
{
	this.stack = [[1,2,3],[],[]]
}

HanoiGame.prototype.isWon = function()
{
	if (this.stack[0].length == 0 && (this.stack[1].length == 3 || this.stack[2].length == 3)) 
	{
		return true
	}
	else
	{
		return false
	}
}

HanoiGame.prototype.isValidMove = function(startTowerIndex, endTowerIndex)
{
	if (startTowerIndex < 0 || startTowerIndex > 2 || endTowerIndex < 0 || endTowerIndex > 2)
	{
		return false
	}
	else if(this.stack[startTowerIndex].length == 0) 
	{	
		return false
	}

	else if (this.stack[endTowerIndex].length == 0) 
	{
		return true
	}
	else if(this.stack[startTowerIndex][0] > this.stack[endTowerIndex][0])
	{
		return false
	}
	else{
		return true
		
	}

}

HanoiGame.prototype.move  = function(startTowerIndex,endTowerIndex)
{
	var moved = false
	if(this.isValidMove(startTowerIndex,endTowerIndex))
	{
		this.stack[endTowerIndex].unshift(this.stack[startTowerIndex].shift())
		moved = true
	}
	return moved

}

HanoiGame.prototype.print = function()
{
	console.log(JSON.stringify(this.stack))
}

HanoiGame.prototype.promptMove = function(callback)
{
	this.print()
	 reader.question("enter index to move from: ", function(startTowerIndex){
		reader.question("enter index to move to: ", function(endTowerIndex){
			callback(startTowerIndex,endTowerIndex)
		})
	})
}

HanoiGame.prototype.run = function()
{
	
	// var that = this
	this.promptMove(function(startTowerIndex,endTowerIndex)
	{
		this.move(startTowerIndex,endTowerIndex)
		if (this.isWon() === false) 
		{
			this.run()
		}
		else
		{
			reader.close()
			this.print()
			console.log("congrats, you won!")
		}
	}.bind(this))
	
	
}

var newGame = new HanoiGame()
newGame.run()


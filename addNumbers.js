var readline = require('readline')
var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function addNumbers(sum, numLeft, completionCallback)
{
	if (numLeft == 0) {
		completionCallback(sum)
		reader.close()
	}
	else
	{
		reader.question("put in a number: ", function(numString1){
			var num1 = parseInt(numString1)
			sum = sum + num1
			console.log("the sum is " + sum)
			addNumbers(sum, numLeft -1, completionCallback)
		})
	}

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
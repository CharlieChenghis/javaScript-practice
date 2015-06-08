function sum()
{
	var total = 0
	for (var i = arguments.length - 1; i >= 0; i--) {
		total += arguments[i]
	};
	return total
}

console.log(sum(1,2,5,6))
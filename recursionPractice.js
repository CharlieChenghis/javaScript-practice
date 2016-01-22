// var exponentiation = function(base,exp){
// 	var x = 1;
// 	for(var i = 0; i<exp; i++){
// 		x = x*base
// 	}
// 	return x;
// }

var exponentiation = function(base,exp){
// 	exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
	if(exp===0){
		return 1;
	} else if(exp%2===0){
		return exponentiation(base,exp/2)*exponentiation(base,exp/2);
	} else{
		return base*(exponentiation(base,(exp-1)/2))*(exponentiation(base,(exp-1)/2));
	}

}

// console.log(exponentiation(2,10))

var fibonacciIterative = function(n){
	var result = [];
	for (var i = 0; i<n; i++){
		if(i===0 || i===1){
			result.push(1);
		}
		else{
			result.push(result[i-2]+result[i-1]);
		}
	}
	return result;
}

var fibonacciRecursive = function(n){
	if(n===1){
		return [1];
	}else if(n===2){
		return [1,1];
	}else{
		var x = fibonacciRecursive(n-1);
		x.push(x[x.length-1]+x[x.length-2]);
		return x;
	}
}
// console.log(fibonacciRecursive(10));

var binarySearch = function(array,x){

	var middle = Math.floor(array.length/2);
	if(array.length ===0){
		return -1;
	}
	if(x===array[middle]){
		return middle;
	}else if(x<array[middle]){
		return binarySearch(array.slice(0,middle),x)
	}else{
		var right = binarySearch(array.slice(middle+1),x);
		return right === -1 ? -1: right + middle + 1;
	}
}
// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10],1.5))

var makeChange = function(amount, coins){
	if(amount === 0){
		return [];
	}
	var solutions = [];
	coins.forEach(function(coin,index){
		if(coin>amount){
			return;
		}
		var change = amount-coin;
		var otherCoins = makeChange(change,coins.slice(index));
		var currentChange = [coin].concat(otherCoins);
		if(solutions.length===0 || (solutions.length>currentChange.length)){
			solutions = currentChange;
		}
	})
	return solutions;
}

// console.log(makeChange(67,[100,50,25,14,5,1]))

var NUMS = [1,2,3,4,5,6]
Array.prototype.myEach = function(func){
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	};
	// return this;
}

// NUMS.myEach(function(element){
// 	console.log("The square of" + element + " is " + (element*element));
// });

Array.prototype.myMap = function(func){
	var returnArray = [];
	this.myEach( function(element){
		returnArray.push(func(element));
	});
	return returnArray;
}

var somefunc = function(element){
	return element * 3;
};
console.log(NUMS.myMap(somefunc);

Array.prototype.myInject = function(func){
	var result = this[0];
	this.slice(1).myEach(function(element){
		result = func(result, element);
	});
	return result;
}

// console.log(NUMS.myInject(function(total, item){
// 	return total + item;
// }))
console.log(NUMS.myInject(
	function(total, element){
		return total + element;
	}
));

NUMS.myMAP(|x| x*3)

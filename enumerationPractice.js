var my_each = function(array,f){
	for(var i = 0; i < array.length; i++){
		f(array[i]);
	}
}

var square = function(el){
	// console.log(el*el);
	return el*el;
}

// my_each([1,2,3,4,5],square);

Array.prototype.myEach = function(f){
	for(var j = 0; j<this.length; j++){
		f(this[j]);
	}
	return this;
};

// [2,4,5,6,7].myEach(square);

Array.prototype.myMap = function(f){
	var mappedArray = [];
	this.myEach(function(el){
		mappedArray.push(f(el));
	});
	return mappedArray;
}

var y = [1,2,3,10];
var z = y.myMap(square);
console.log(z);


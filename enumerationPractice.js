var my_each = function(array,f){
	for(var i = 0; i < array.length; i++){
		f(array[i]);
	}
}

var square = function(el){
	console.log(el*el);
	return el*el;
}

my_each([1,2,3,4,5],square);

Array.prototype.myEach = function(f){
	for(var j = 0; j<this.length; j++){
		f(this[j]);
	}
};

[2,4,5,6,7].myEach(square);
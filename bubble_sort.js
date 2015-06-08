Array.prototype.bubbleSort = function(){
	for (var i = this.length - 1; i >= 0; i--) {
		for (var j = this.length - 1; j >= i; j--) {
			if (this[i] > this[j]) {
				var temp = this[i];
				this[i]= this[j];
				this[j]= temp;
			}
		}
	}
	return this;
}

Array.prototype.bubbleSort2 = function(){
	var sorted = false
	while(!sorted){
		sorted = true
		for (var i = this.length - 1; i > 0; i--) {
			if (this[i]<this[i-1]) {
				var temp = this[i]
				this[i]=this[i-1]
				this[i-1]=temp
				sorted = false
			};
		};
	}
	return this;
}

var NUMS = [3,6,8,3,45,4,6,7];
var NUMS2 = [3,6,8,3,45,4,6,7];

console.log(NUMS);
NUMS.bubbleSort()
NUMS2.bubbleSort2() 

console.log(NUMS);
console.log(NUMS2)

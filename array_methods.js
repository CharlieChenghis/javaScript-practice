// Array.prototype.myUnique = function(){
//   this.forEach(removeDuplicated);
//   return this;
// }

// function removeDuplicated(element, index, array){
//   for(i = index + 1; i < array.length; i++){
//     if (array[i] == element) {
//       array.splice(i,1);
//       i --;
//     }
//   }
// }

// var uniqueArray = [1,2,1,2,3,4,5,54,6,7,5].myUnique();
// console.log(uniqueArray);


Array.prototype.myUniq = function(){
	var uniqueArray = [];
	for (var i = this.length-1; i>=0; i--) {
		if (this.slice(0,i).indexOf(this[i])===-1) {
			uniqueArray.unshift(this[i]);
		};
	};
	return uniqueArray;
}

Array.prototype.twoSum = function(){
	var zeroPairs = [];
	for(var i = 0; i<this.length; i++){
		for(var j = i+1; j < this.length; j++){
			if(this[i]+this[j]===0){
				zeroPairs.push([i,j]);
			}
		}
	};
	return zeroPairs;
}

Array.prototype.transpose = function(){
	var transposedArray = [];
	for(var x = this[0].length; x>0; x--){
		transposedArray.push([]);
	}
	for (var i = 0; i < this.length; i++){
		for(var j = 0; j<this[i].length; j++){
			transposedArray[j][i] = this[i][j];
		}
	}
	return transposedArray;
}

var myArray = [1,1,2,5,6,7,3,4,6,87];
// console.log(myArray.myUniq());
var secArray = [-1,0,0,1,2,3,-3,1];
// console.log(secArray.twoSum());
var tranArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(tranArray.transpose());
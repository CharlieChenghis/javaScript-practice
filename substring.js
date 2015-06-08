String.prototype.substring = function(){
	var returnArray = [];
	for (var i =  0; i < this.length; i++) {
		for(var j = i; j< this.length; j++){
			returnArray.push(this.slice(i,j+1));
		}
	};
	return returnArray;
}

var str = "cat"
console.log(str.substring())
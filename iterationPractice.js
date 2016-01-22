"use strict";

var bubble_sort = function(array){
	var	 sorted = false;
	while(sorted == false){
		sorted = true;
		for(var i = 0; i<array.length-1; i++){
			if(array[i]>array[i+1]){
				var x = array[i];
				array[i] = array[i+1];
				array[i+1] = x;
				sorted = false;
			}
		} 
	}
	return array;
}

console.log(bubble_sort([6,10,1,6,2,1,1,5,2,6]));

String.prototype.mySub = function(){
	//"dog" => ["d","do","dog","o","og","g"]
	var outputArray =[];
	for(var i = 0; i<this.length; i++){
		for(var j = i+1; j<=this.length; j++){
			outputArray.push(this.substring(i,j));
		}
	}
	return outputArray;
}

console.log("face".mySub());
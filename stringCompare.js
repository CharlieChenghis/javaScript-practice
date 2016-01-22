"use strict";
function stringCompare(s1, s2){
// s1 and s2 are both strings
// they will be broken up into an array of words
// the output is 
// (number of words in s2 that is found in s1)/(total words in s1)
	var s1Array = s1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()。，]/g,"").split("");
	var s2Array = s2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()。，]/g,"").split("");
	var numerator = s1Array.length<s2Array.length ? s1Array : s2Array;
	var denominator =s1Array.length>=s2Array.length ? s1Array : s2Array;

	var correctWordCount = 0;
	for (var i = numerator.length - 1; i >= 0; i--) {
		if(denominator.includes(numerator[i])){
			correctWordCount++;
		}	
	};


	return Math.floor(correctWordCount*100/denominator.length);
}

console.log(stringCompare("hello Charlie", "Hi Charlie"));
console.log("hello");

// function gets_hoisted(){
// 	console.log("1");
// }

// return gets_hoisted();

// function gets_hoisted(){
// 	console.log("2");
// }

var not_hoisted = function(){
	console.log("1");
}

not_hoisted();

var not_hoisted = function(){
	console.log("2");
}
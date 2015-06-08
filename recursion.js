
function range(start, end){
	var returnArray = []
	returnArray.push(start)
	if (start == end) {
		return returnArray
	}
	return returnArray.concat(range(start+1,end))
}


function exp(x, n){
	if (n == 0) {
		return 1;
	}
	else{
		return x* exp(x,n-1)
	}
}

function fib(n){
	if(n == 2){
		return [1,1]
	}
	else{
		return fib(n-1).concat(fib(n-1).slice(-2)[0]+fib(n-1).slice(-1)[0])
	}
}

// console.log(exp(10, 5))
function bsearch(arr, x){
	console.log(arr,x)
	if(arr.length == 1 && arr[0] != x){
		return;
	}
	if(x == arr[Math.floor(arr.length/2)]){

		return Math.floor(arr.length/2)

		// return (arr.length/2).floor 		
	}
	else if(x > arr[Math.floor(arr.length/2)]){
		return bsearch(arr.slice(Math.ceil(arr.length/2)),x) + Math.ceil(arr.length/2)
	}
	else{
		console.log(arr.slice(0,Math.floor(arr.length/2)))

		return bsearch(arr.slice(0,Math.floor(arr.length/2)),x)
	}
}



// console.log(bsearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],15))
// console.log(bsearch([0,12,24,35,45,56,67,78,80,90,101,121,142,183,194],91))

function mergeSort(arr){
	if (arr.length <= 2) {
		return arr
	};
	var middle = Math.floor(arr.length/2)
	var left = mergeSort(arr.slice(0,middle))
	var right = mergeSort(arr.slice(middle))
	return merge(left, right)

}

function merge(left, right){
	var returnArray = []
	while(left.length != 0 && right.length != 0){
		if (left[0] < right[0]) {
			returnArray.push(left.shift())
		}
		else{
			returnArray.push(right.shift())
		}
	}
	return returnArray.concat(left,right)
}
console.log(mergeSort([4,6,2,3,61,6,34,6,1,2,5]))
// console.log(merge([1,4,5,7,8],[3,6,8,9,9,20]))
// console.log(fib(7))

function subset(arr)
{
	returnArray = [[]]
	if (arr.length == 0) {
		return [[]];
	};
	return subset(arr.slice(1)).forEach(addElement)
}

function addElement(element,index,array){

}
function curriedSum (numArgs) {
  var numbers = [];

  function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length == numArgs) {
      var total = 0;

      numbers.forEach(function (num) { total += num });
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// console.log(curriedSum(2)(1)(2))

Function.prototype.curry = function(numArgs)
{
	var that = this
	var args = []
	function _curry(fn)
	{
		args.push(fn)
		if (args.length === numArgs) {
			return that.apply(that ,args)
		}else{
			return _curry
		}
	}
	return _curry
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
console.log(f3(6)); // = 30
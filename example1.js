// function times(num, fun) {
//   console.log(this)
//   for (var i = 0; i < num; i++) {
//     fun(); // call is made "function-style"
//   }
// }

// var cat = {
//   age: 5,

//   ageOneYear: function () {
//     // console.log(this)
//     this.age += 1;
//   }
// };

// // cat.ageOneYear(); // works
// // cat.ageOneYear(); // works

// console.log(cat.age)


// times(1, cat.ageOneYear); // does not work! This is Window
// // times(1, function(){cat.ageOneYear()}); // works, This is cat
// // times(2, cat.ageOneYear.bind(this))

// // console.log(cat.age)
// // console.log(this)


function SumCalculator() {
  // scope 0
  this.sum = 0;
}

SumCalculator.prototype.addNumbers = function (numbers) {
  // scope 1
  var self = this
  numbers.forEach(function (number) {
    // scope 2
    self.sum += number; // noooo!
  });

  return this.sum;
};

var calc = new SumCalculator()

console.log(calc.addNumbers, function() {calc.addNumbers([2,1])}, calc.addNumbers.bind(calc),  calc.addNumbers([2,1]))
// console.log(calc.addNumbers([2,1]).bind(calc))

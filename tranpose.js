'use strict';
var cols = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];


  Array.prototype.my_transpose = function(){
    for(var i = 0; i < this.length; i++){
      for (var j = i+1; j < this.length; j++) {
        var x = this[i][j];
        this[i][j] = this[j][i];
        this[j][i] = x;
      }
    }
    return this;
  }

console.log(cols);
var newArray = cols.my_transpose();
console.log(newArray);

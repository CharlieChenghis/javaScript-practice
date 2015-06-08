Array.prototype.twoSum = function(){
  var pairsArray = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if(this[i]+this[j] == 0){
        pairsArray.push([i,j]);
      }
    }
  }
  return pairsArray;
}

console.log([-1, 0, 2, -2, 1].twoSum());

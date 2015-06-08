Array.prototype.myUnique = function(){
  this.forEach(removeDuplicated);
  return this;
}

function removeDuplicated(element, index, array){
  for(i = index + 1; i < array.length; i++){
    if (array[i] == element) {
      array.splice(i,1);
      i --;
    }
  }
}

var uniqueArray = [1,2,1,2,3,4,5,54,6,7,5].myUnique();
console.log(uniqueArray);

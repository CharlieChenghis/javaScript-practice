function squeakyClean(arr) {
  // so clever
  // such best practice
  var endArray = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] == 0 || arr[i] == undefined || arr[i] == null || arr[i] == ''){

    }
    else{
      endArray.push(arr[i]);
    }
  }
  return endArray;
}

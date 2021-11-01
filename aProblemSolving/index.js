// A. PROBLEM SOLVING:

//Ex1:
const array = [2, 3, -5, -2, 4]
function adjacentElementsProduct(arr) {
    var max = arr[0] * arr[1];
    for(var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i]*arr[i + 1];
        if(temp > max){
            max = temp;
        }
    }
    return max;
}
console.log(adjacentElementsProduct(array));

//Ex2:
const array = [60, 40, 55, 75, 64]
function alternatingSums(a){
    var sumA = 0;
    var sumB = 0;
    for(var i = 0; i < a.length; i+= 2) {
    sumA += a[i];
    }
    for(var j = 1;j < a.length; j+= 2) {
    sumB += a[j];
    }
  return [sumA, sumB]
}
console.log(alternatingSums(array))
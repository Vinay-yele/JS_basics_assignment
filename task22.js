function removeLargest(arr) {
    if (arr.length === 0) {
      return arr;
    }
    let largest = arr[0];
    let largestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
        largestIndex = i;
      }
    }
    arr.splice(largestIndex, 1);
    return arr;
}
const arr1 = [5,18,26,30,40,6];
const arr2 = [100,10,20,50,64,200];
const arr3 = [77];
const arr4 = [25,20,14,2,7,21];
console.log(removeLargest(arr1));
console.log(removeLargest(arr2));
console.log(removeLargest(arr3));
console.log(removeLargest(arr4));
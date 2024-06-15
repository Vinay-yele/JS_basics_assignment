function compareFirstAndLast(arr) {
    if (arr.length === 0) {
      return 'Empty array';
    }
    if (arr[0] > arr[arr.length - 1]) {
      return `FIRST: ${arr[0]}`;
    } else if (arr[0] < arr[arr.length - 1]) {
      return `LAST: ${arr[arr.length - 1]}`;
    } else {
      return `EQUAL: ${arr[0]}`;
    }
}
const arr1 = [4,8,12,20,6]
const arr2 =[10,8,6,4,2,0]
const arr3 =[15,15]
const arr4 =[40]
const arr5 =[2,4,6,8,6,4,2]

console.log(compareFirstAndLast(arr1));
console.log(compareFirstAndLast(arr2));
console.log(compareFirstAndLast(arr3));   
console.log(compareFirstAndLast(arr4)); 
console.log(compareFirstAndLast(arr5)); 

function countDivisible(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
        count++;
      }
    }
    return `Count=${count}`;
  }
const arr1 = [10,12,14];
const arr2 = [210];
const arr3 = [3,4,5,6];
const arr4 = [11,17,8,10,21];
const arr5 = [1,2,3,4,5,6,7,8,9,10,11];
const arr6 =  [11,13,17,19,23,121,169];
console.log(countDivisible(arr1));
console.log(countDivisible(arr2));
console.log(countDivisible(arr3));
console.log(countDivisible(arr4));
console.log(countDivisible(arr5));
console.log(countDivisible(arr6));  
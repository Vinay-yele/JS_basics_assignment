function printArrayPop(arr) {
    while (arr.length > 0) {
      console.log(`Pops = ${arr.pop()}`);
    }
    console.log(`Pops =`);
  }

const arr1 = [40,6,9];
const arr2 = [6];
const arr3 = [];
const arr4 = [20,14,2,7,18];
console.log(printArrayPop(arr1));
console.log(printArrayPop(arr2));
console.log(printArrayPop(arr3));
console.log(printArrayPop(arr4)); 
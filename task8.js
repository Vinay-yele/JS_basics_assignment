function roundOddToNearestEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        arr[i] = arr[i] + 1;
      }
    }
    return arr;
}

const arr1 = [5,18,23,30]

const arr2 = [5,7,9]

const arr3 = [72]
console.log(roundOddToNearestEven(arr1));
console.log(roundOddToNearestEven(arr2));
console.log(roundOddToNearestEven(arr3));   
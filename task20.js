function printArrayShift(arr) {
    while (arr.length > 0) {
      console.log(`Shift = ${arr.shift()}`);
    }
    console.log(`Shift =`);
  }
  const arr1 = [40,6,9];
  const arr2 = [6];
  const arr3 = [];
  const arr4 = [20,14,2,7,18];
  console.log(printArrayShift(arr1));
  console.log(printArrayShift(arr2));
  console.log(printArrayShift(arr3));
  console.log(printArrayShift(arr4));
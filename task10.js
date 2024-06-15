function compareArraySums(arrA, arrB) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arrA.length; i++) {
      sum1 += arrA[i];
    }
    for (let i = 0; i < arrB.length; i++) {
      sum2 += arrB[i];
    }
    if (sum1 > sum2) {
      return 'Big1';
    } else if (sum1 < sum2) {
      return 'Big2';
    } else {
      return 'Equal';
    }
}
const arr1 = [1,2,3];
const arr2 = [10,20,30];
console.log(compareArraySums(arr1,arr2));

const arr3 = [1,3,5,7,9];
const arr4 = [2,4,19];
console.log(compareArraySums(arr3,arr4));

const arr5 = [50,100];
const arr6 = [1,2,3,4,5,6];
console.log(compareArraySums(arr5,arr6));

const arr7 = [2,4,6,8];
const arr8 = [20];
console.log(compareArraySums(arr7,arr8));

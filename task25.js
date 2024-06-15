function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
      if (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
      }
      if (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
      }
    }
    return mergedArr;
}
const arrA = [5,18,26,30];
const arrB = [101,102];
console.log(mergeArrays(arrA,arrB));

const arrC = [1,2];
const arrD = [20,50,60,70] ;
console.log(mergeArrays(arrC,arrD));

const arrE = [];
const arrF = [1,2,3];
console.log(mergeArrays(arrE,arrF));

const arrG = [2,4,6,8];
const arrH = [];
console.log(mergeArrays(arrG,arrH));
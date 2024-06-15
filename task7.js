function =addHELLOtoArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 'Hello ' + arr[i];
    }
    return arr;
}


const arr1 = ['Jack', 'Mary']
const arr2 = ['Jack']
const arr3 = []
console.log(=addHELLOtoArray(arr1));
console.log(=addHELLOtoArray(arr2));
console.log(=addHELLOtoArray(arr3));
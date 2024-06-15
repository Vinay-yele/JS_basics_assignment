function createEvenArrayUnshift(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.unshift(arr[i]);
      }
    }
    return evenArr;
  }

console.log(createEvenArrayUnshift([5,18,26,30,40,6,3])); 
console.log(createEvenArrayUnshift([6])); 
console.log(createEvenArrayUnshift([77])); 
console.log(createEvenArrayUnshift([20,14,2,7,18])); 
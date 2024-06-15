function createEvenArray(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
      }
    }
    return evenArr;
  }
console.log(createEvenArray([5,18,26,30,40,6,9])); 
console.log(createEvenArray([6])); 
console.log(createEvenArray([77])); 
console.log(createEvenArray([20,14,2,7,18])); 
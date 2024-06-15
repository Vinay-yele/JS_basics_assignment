function checkAlternating(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] % 2 !== 0) return "NOT";
      if (i % 2 !== 0 && arr[i] % 2 === 0) return "NOT";
    }
    return "ALTERNATING";
  }
console.log(checkAlternating([2, 3, 4, 5, 6, 7])); 
console.log(checkAlternating([4, 9, 16, 25, 49])); 
console.log(checkAlternating([3, 4, 5, 6])); 
console.log(checkAlternating([4, 5, 6, 7, 8, 9, 10])); 
console.log(checkAlternating([10])); 
console.log(checkAlternating([7])); 
console.log(checkAlternating([12, 25])); 
function checkSequence(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) return "NOT";
    }
    return "SEQUENCE";
  }
  
  console.log(checkSequence([12, 13, 14, 15, 16, 17])); 
  console.log(checkSequence([4, 3, 2, 5])); 
  console.log(checkSequence([3, 4, 5, 6])); 
  console.log(checkSequence([12,11,10] ));
  console.log(checkSequence([34,35]));
  console.log(checkSequence([1,1,2,3]));

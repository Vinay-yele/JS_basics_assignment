function checkAB(str) {
    if (str.indexOf('ab') !== -1) {
      return 'AB FOUND';
    } else {
      return 'AB NOT FOUND';
    }
}
console.log(checkAB('javascript')); 
console.log(checkAB('TESTabcdef')); 
console.log(checkAB('acbcadbd')); 
console.log(checkAB('bat+ball')); 
console.log(checkAB('nicebaby'));
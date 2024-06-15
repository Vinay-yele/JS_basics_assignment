function findAndRemoveName(arr, name) {
    const index = arr.indexOf(name);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

console.log(findAndRemoveName(['Jack', 'Bob', 'Ed', 'Steve'], 'Bob'));  
console.log(findAndRemoveName(['Jack', 'Bob', 'Ed', 'Steve'], 'Jack')); 
console.log(findAndRemoveName(['Jack', 'Bob', 'Ed', 'Steve'], 'Steve'));
console.log(findAndRemoveName(['Jack', 'Bob', 'Ed', 'Steve'], 'Bill')); 
console.log(findAndRemoveName(['Jack'], 'Jack'));                       

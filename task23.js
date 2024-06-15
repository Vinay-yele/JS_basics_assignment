function insertInSortedArray(arr, num) {
    let i = 0;

    while (i < arr.length && arr[i] < num) {
        i++;
    }

    arr.splice(i, 0, num);
    return arr;
}


console.log(insertInSortedArray([5, 18, 26, 30, 40], 6)); 
console.log(insertInSortedArray([10, 20, 50, 64], 99));   
console.log(insertInSortedArray([5], 7));                 
console.log(insertInSortedArray([5], 2));                 

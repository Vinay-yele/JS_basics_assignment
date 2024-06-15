
function adding10toallNumbers(array) {
    const increaseBy = 10;
    for (let i = 0; i < array.length; i++) {
        array[i] += increaseBy;
    }
    return array;
}

const array1 = [2, 3, 5, 7];
const array2 = [23, 25];
const array3 = [6];

console.log(adding10toallNumbers(array1)); 
console.log(adding10toallNumbers(array2)); 
console.log(adding10toallNumbers(array3));
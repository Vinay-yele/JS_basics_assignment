
function sumArray(numbers) {
 
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum of the array elements:", sum);
}
const array1 = [1,3,4,5,6];
const array2 = [11]
const array3 = [-1,2,-3,4,-5,6,-7]
const array4 = []
sumArray(array1);
sumArray(array2);
sumArray(array3);
sumArray(array4);
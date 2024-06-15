function sumAndCountMultiplesOf3(numbers) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            sum += numbers[i];
            count++;
        }
    }
    console.log("3Sum:", sum);
    console.log("3count", count);
}

const array1 = [3,4,5,12];
const array2 = [11];
const array3 = [1,2,3,4,5,6,7,8,9,10];
const array4 = [];
sumAndCountMultiplesOf3(array1);
sumAndCountMultiplesOf3(array2);
sumAndCountMultiplesOf3(array3);
sumAndCountMultiplesOf3(array4);
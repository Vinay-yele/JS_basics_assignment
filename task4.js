function sumEvenAndOdd(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sumEven += numbers[i];
        } else {
            sumOdd += numbers[i];
        }
    }
    console.log("EvenSum:", sumEven);
    console.log("OddSum", sumOdd);
}

const array1 = [3,4,5,12];
const array2 = [ 101];
const array3 = [1,2,3,4,5,6,7,8,9,10];

sumEvenAndOdd(array1);
sumEvenAndOdd(array2);
sumEvenAndOdd(array3);
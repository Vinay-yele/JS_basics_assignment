function countAndValuesGreaterThan21(numbers) {
    let count = 0;
    let values = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 21) {
            count++;
            values.push(numbers[i]);
        }
    }
    console.log("Count =", count);
    console.log("Values =", values.join(',') + (values.length > 0 ? ',' : ''));
}


countAndValuesGreaterThan21([5, 18, 26, 30, 40, 6]);
countAndValuesGreaterThan21([100, 200, 10, 20, 50, 64]);
countAndValuesGreaterThan21([77]);
countAndValuesGreaterThan21([]);

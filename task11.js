function findAndLogLargest(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return null;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    console.log("Max:", largest);
    return largest;
}

const arr1 = [5, 18, 26, 30, 40, 6];
const arr2 = [100, 200, 10, 20, 50, 64];
const arr3 = [77];
const arr4 = [25, 20, 14, 2, 7, 21];

findAndLogLargest(arr1); 
findAndLogLargest(arr2); 
findAndLogLargest(arr3); 
findAndLogLargest(arr4); 
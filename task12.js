function checkArrayElements(arr) {
    if (arr.length === 0) {
        console.log("DIFFERENT"); 
        return;
    }

    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== firstElement) {
            console.log("DIFFERENT");
            return;
        }
    }
    console.log("ALLSAME");
}
checkArrayElements([12, 13, 12, 12, 12]); 
checkArrayElements([14, 14, 14, 14]);     
checkArrayElements([3, 3, 3, 6]);         
checkArrayElements([18, 18]);             
checkArrayElements([6]);                  

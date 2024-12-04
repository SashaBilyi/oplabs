function max(matrix) {
    let maxElement = -Infinity; 
    for (let row of matrix) {
        for (let num of row) {
            if (num > maxElement) {
                maxElement = num;
            }
        }
    }
    return maxElement;
}


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 

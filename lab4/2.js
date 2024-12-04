function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3)); 
console.log(sum(0));       
console.log(sum());        
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1)); 

function random(min, max) {
    
    if (max === undefined) {
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random(5));       
console.log(random(10, 20));  
console.log(random(-10, 0));  

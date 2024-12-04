function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
    const results = [];
    for (let i = 0; i <= 9; i++) {
        const squared = square(i);
        const cubed = cube(i);
        const avg = average(squared, cubed);
        results.push(avg);
    }
    return results;
}


const finalResults = calculate();
console.log(finalResults);

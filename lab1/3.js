let array = [
    true, 'hello', 5, 12, -200, false, false, 'word', 
    42, true, 'example', 0, -7, false, 'test', 100, 
    true, 'JavaScript', 256, 'world', false
];


const typeCounts = {};
for (const element of array) {
    const type = typeof element;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
}

console.log(typeCounts);

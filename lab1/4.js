let array = [
    true, 'hello', 5, 12, -200, false, false, 'word', 
    42, true, 'example', 0, -7, false, 'test', 100, 
    true, 'JavaScript', 256, 'world', false
];

let typeCounts = { number: 0, string: 0, boolean: 0 };

typeCounts = {};  


for (const element of array) {
    const type = typeof element;
   
    if (!(type in typeCounts)) {
        typeCounts[type] = 0;
    }
    typeCounts[type] += 1;
}

console.log(typeCounts);

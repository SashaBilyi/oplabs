function ages(persons) {
    const result = {};
    for (let person in persons) {
        const { born, died } = persons[person]; 
        result[person] = died - born; 
    }
    return result;
}


const persons = {
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  newton: { born: 1643, died: 1727 },
  darwin: { born: 1809, died: 1882 },
};

console.log(ages(persons));


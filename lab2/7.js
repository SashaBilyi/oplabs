function fn() { 
    const constantObject = { name: "Sasha" };
    let variableObject = { name: "Sasha" };

    constantObject.name = "Max";
    variableObject.name = "Max";

    
    // constantObject = { name: "Mike" }; // Does not work because constantObject is const
    variableObject = { name: "Mike" }; 

    return { constantObject, variableObject };
}


const result = fn();
console.log(result);

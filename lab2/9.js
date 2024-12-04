const phoneBook = [
    { name: 'Albert Einshtein', phone: '+380445554433' },
    { name: 'Julia Roberts', phone: '+380666667788' },
    { name: 'Taras Shevchenko', phone: '+380999995555' }
];


function findPhoneByName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }    
}

console.log(findPhoneByName('Taras Shevchenko')); 



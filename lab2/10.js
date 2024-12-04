'use strict';

const phonebook = {
  'Albert Einshtein': '+380445554433',
  'Julia Roberts': '+380666667788',
  'Taras Shevchenko': '+380999995555',
};

const findPhoneByName = (name) => {
  return phonebook[name];
};

console.log(findPhoneByName('Julia Roberts')); 




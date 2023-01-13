const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given array is: `);
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------`);
console.log(`1) Reversed array is:`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------`);
console.log(`2) Array using sort() method as it is:`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------`);
console.log(`3) Array sorting in ascending order:`);
arrayRollNumbers.sort((val1,val2)=> val1 > val2 ? 1 : -1 );
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------`);
console.log(`4) Greatest number from the array: `);
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);
console.log(`----------------------------------------------------`);
console.log(`5) Smallest number from the array: `);
console.log(arrayRollNumbers[0]);
console.log(`----------------------------------------------------`);
console.log(`6) Remove duplicate from array: `);
const arrSet=[...new Set(arrayRollNumbers)];
console.log(arrSet);
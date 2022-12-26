const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`==============Given array is :=========`);
console.log(fruits_seasonal);

console.log(`\n==============1)First and Last element of Array===============`);
console.log(`First Element of array is : ${fruits_seasonal[0]}`);
console.log(`Last Element of array is : ${fruits_seasonal[fruits_seasonal.length-1]}`);

console.log(`\n==============2)Add 'Papaya' Before 'banana'===============`);
let addPapaya=fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`\n==============3)Remove 'Mango' from array===============`);
let removeMango=fruits_seasonal.splice(fruits_seasonal.length-2 , 1);
console.log(fruits_seasonal);

console.log(`\n==============4)Add 'Pineapple' at the last position of array===============`);
let addPineapple=fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`\n==============5)Insert 'Dragon Fruit' before 'water Melon'===============`);
let indexOFWaterMelon=fruits_seasonal.indexOf("Water Melon");
let insertDragon=fruits_seasonal.splice(indexOFWaterMelon , 0 , "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`\n==============6)Replace 'Orange' with 'Kiwi'===============`);
let indexOfOrange=fruits_seasonal.indexOf("Orange");
let replaceOrange=fruits_seasonal.splice( indexOfOrange , 1 , "Kiwi");
console.log(fruits_seasonal);

console.log(`\n==============7)Log elements starting index from 1 to 4===============`);
console.log(fruits_seasonal.slice(1 , 5));

console.log(`\n==============8)Only select last 3 elements===============`);
let findLastThirdIndex=fruits_seasonal.length-3;
console.log(fruits_seasonal.slice(findLastThirdIndex));
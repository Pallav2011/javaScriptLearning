const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`============1) Find the total elements and length================`);
console.log(arrayNumbers);
console.log(`============2)First element and Last element of array================`);
console.log(`First element of array is : ${arrayNumbers[0]}`);
console.log(`Last element of array is : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`============3)Thirst last element of array================`);
console.log(`Thirst last element is : ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`============4)Find the all even numbers from array================`);
let evenNumbers="";
for (const element of arrayNumbers) {
    if(element%2==0){
        evenNumbers=evenNumbers.concat("   ",element);
    }
}
console.log(evenNumbers);
console.log(`============5)Find the all odd numbers from array================`);
let oddNumbers="";
for (const element of arrayNumbers) {
    if(element%2!==0){
        oddNumbers=oddNumbers.concat("   ",element);
    }
}
console.log(oddNumbers);
console.log(`============6)Find the even positioned elements from array================`);
let evenPositionedNumbers="";
for (let index = 0; index < arrayNumbers.length; index++) {
   if(index%2==0){
    evenPositionedNumbers=evenPositionedNumbers.concat("   ",arrayNumbers[index]);
   }
}
console.log(evenPositionedNumbers);
console.log(`============7)Find the odd positioned elements from array================`);
let oddPositionedNumbers="";
for (let index = 0; index < arrayNumbers.length; index++) {
   if(index%2!==0){
    oddPositionedNumbers=oddPositionedNumbers.concat("   ",arrayNumbers[index]);
   }
}
console.log(oddPositionedNumbers);
console.log(`============8)Find the sum of all elements of array================`);
let sumOfArrayNumber=0;
for (const element of arrayNumbers) {
    sumOfArrayNumber=sumOfArrayNumber+element;
}
console.log(`Sum of array numbers is : ${sumOfArrayNumber}`);
console.log(`============9)Find the number which are multiple of 5================`);
let multipleOfFiveNumbers="";
for (const element of arrayNumbers) {
    if(element%5==0){
        multipleOfFiveNumbers=multipleOfFiveNumbers.concat("   ",element);
    }
}
console.log(multipleOfFiveNumbers);
console.log(`============10)is number 115 available in array================`);
let isAvailable115=arrayNumbers.includes(115);
console.log(`is number 115 available in array : ${isAvailable115}`);
console.log(`============11)is number 23 available in array================`);
let isAvailable23=arrayNumbers.includes(23);
console.log(`is number 23 available in array : ${isAvailable23}`);
console.log(`============12)insert number 55, 66 before index 3 ================`);
let insertNumbers=arrayNumbers.splice(3 , 0 , 55,66);
console.log(arrayNumbers);
console.log(`============13)delete 3 elements from index 4 ================`);
let deleteElements=arrayNumbers.splice(4 , 3);
console.log(arrayNumbers);
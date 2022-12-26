const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`============1) Find the total elements and length================`);
console.log(arrayNumbers);
console.log(`============2)First element and Last element of array================`);
console.log(arrayNumbers);
console.log(`First element of array is : ${arrayNumbers[0]}`);
console.log(`Last element of array is : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`============3)Thirst last element of array================`);
console.log(arrayNumbers);
console.log(`Thirst last element is : ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`============4)Find the all even numbers from array================`);
console.log(arrayNumbers);
for (const element of arrayNumbers) {
    if(element%2==0){
        console.log(element);
    }
}
console.log(`============5)Find the all odd numbers from array================`);
console.log(arrayNumbers);
for (const element of arrayNumbers) {
    if(element%2!==0){
        console.log(element);
    }
}
console.log(`============6)Find the even positioned elements from array================`);
console.log(arrayNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
   if(index%2==0){
    console.log(arrayNumbers[index]);
   }
}
console.log(`============7)Find the odd positioned elements from array================`);
console.log(arrayNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
   if(index%2!==0){
    console.log(arrayNumbers[index]);
   }
}
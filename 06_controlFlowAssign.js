var counter=0;
function countVowel(stringName){
for (let index = 0; index < stringName.length-1; index++) {
    var char = stringName.charAt(index);
    var char2= char.toLowerCase();
if(char2 == 'a' || char2=='e'||char2 == 'i' ||char2 == 'o' ||char2 == 'u' ){
counter++;
}
} 
return counter;
}

function getSumOfCube(){
    var cube=0;
for (let index = 1; index <=5; index++) {
    cube+=index*index*index;
    // console.log(`cube of ${index} = ${cube}`);
}
console.log(`The sum of cube of numbers from 1 to 5 is : ${cube}`);
}

console.log(`1) Count the total number of vowels.............\n`);
var string1="I am very good IT Developer";
console.log(`string : ${string1}`);
var count=countVowel(string1);
console.log(`Total Vowels in Given String is ${count}`);
console.log(`-----------------------------------------------\n2) Find the sum of cube of numbers from 1 to 5\n`);
getSumOfCube();
console.log(`-----------------------------------------------\n3) --------------------\n`);
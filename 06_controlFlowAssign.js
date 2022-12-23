var counter = 0;
function countVowel(stringName) {
  for (let index = 0; index < stringName.length - 1; index++) {
    var char = stringName.charAt(index);
    var char2 = char.toLowerCase();
    if (
      char2 == "a" ||
      char2 == "e" ||
      char2 == "i" ||
      char2 == "o" ||
      char2 == "u"
    ) {
      counter++;
    }
  }
  return counter;
}

function getSumOfCube() {
  var cube = 0;
  for (let index = 1; index <= 5; index++) {
    cube += index * index * index;
    // console.log(`cube of ${index} = ${cube}`);
  }
  console.log(`The sum of cube of numbers from 1 to 5 is : ${cube}`);
}

function oddPositionedChars(nameOfString) {
  var stringConcate = "";
  var splitString = nameOfString.split(" ").join("");
  for (let index = 1; index < splitString.length; index = index + 2) {
    var char = splitString.charAt(index);
    stringConcate += char;
  }
  console.log(stringConcate);
}

console.log(`1) Count the total number of vowels.............`);
var string1 = "I am very good IT Developer";
console.log(`string : ${string1}`);
var count = countVowel(string1);
console.log(`Total Vowels in Given String is ${count}`);
console.log(`---------------------------------------------------`);
console.log(`2) Find the sum of cube of numbers from 1 to 5\n`);
getSumOfCube();
console.log(`---------------------------------------------------`);
console.log(`3) Print odd Positioned charectors egnoring spaces\n`);
var stringName1 = "Hard work always pays back";
var stringName2 = "Soon I will be Angular IT Champ";
console.log(`string 1: ${stringName1}`);
oddPositionedChars(stringName1);
console.log(`string 2: ${stringName2}`);
oddPositionedChars(stringName2);

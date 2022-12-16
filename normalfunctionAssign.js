function squareOfWordLenth(stringVal){
console.log(`Length of word "${stringVal}" is :${stringVal.length}`);
return stringVal.length*stringVal.length;
}

var functionExp= function (){
var stringName="I am Angular Developer";
console.log(`Given string is: ${stringName}\n`);
var stringLength=stringName.length;
console.log(`Length of given string is: ${stringLength}\n`);
var totalWords=stringName.split(" ").length;
console.log(`Total words in given string is:${totalWords}\n`);
var devision=stringLength/totalWords;
console.log(`Division of length by total number of words is :${devision}\n`);
var multiplication=stringLength*totalWords;
console.log(`Multiplication of length by total number of words is :${multiplication}`);
}

var squareOfLength = squareOfWordLenth("JavaScript");
console.log(`Sqaure of word length is: ${squareOfLength}\n`);
squareOfLength = squareOfWordLenth("Google Chrome");
console.log(`Sqaure of word length is: ${squareOfLength}\n`);
squareOfLength = squareOfWordLenth("Developer Smart");
console.log(`Sqaure of word length is: ${squareOfLength}`);
console.log(`--------------------------------------------------------\n`);
functionExp();

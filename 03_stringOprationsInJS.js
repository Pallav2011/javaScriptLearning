var stringHandsOn=function(myStringParam){
console.log(`1) String Printed as it is......................\n${myStringParam}`);

var stringLength =myStringParam.length;
console.log(`\n2) Length of String is:${stringLength}`);

var stringTrim=myStringParam.trim();
console.log(`\n3) Removed extra leading and trailing spaces by using trim()...........\n${stringTrim}`);

var stringLengthAfterTrim=stringTrim.length;
console.log(`string length after trim is:${stringLengthAfterTrim}`);

var removedSpaces=stringLength-stringLengthAfterTrim;
console.log(`\n4) Total number of extra spaces that are removed is= ${removedSpaces}`);
console.log(`\n5) first charecter is:${stringTrim.charAt(0)} and last charecter is :${stringTrim.charAt(stringLengthAfterTrim-1)}`);

var stringSplit=stringTrim.split(" ");
console.log(`\n6) Total words in the string after trim is:...............`);
console.log(stringSplit);

var indexOfString=myStringParam.indexOf("good");
console.log(`\n7) Index of word "good" in given string is:${indexOfString}`);
console.log(`\n8) The substring is started form index 22 is:${myStringParam.slice(22)}`);
console.log(`\n9) Is string ends with word "up"=${stringTrim.endsWith("up")}`);
console.log(`\n10) Is string starts with word "Hey"=${stringTrim.startsWith("Hey")}`);
}
var myString="     Hey you are doing good, keep it up       ";
stringHandsOn(myString);

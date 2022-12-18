var greatestNumber = function (num1,num2){
 var result = num1>num2 ? num1 : num2 ;
 console.log(`${result} is greatest`);
}

var checkEvenOrOdd = function (num){
    var res = num%2==0 ? 'Even' : 'Odd';
    return res;
}

var checkLengthEvenOrOdd = function (value){
    var wordLength=value.length;
    var res = wordLength%2==0 ? 'Even' : 'Odd';
    return res;
}

console.log(`1) To find the greatest number.....................`);
greatestNumber(10,-10);
greatestNumber(800,899);
console.log(`\n2) To check given number is even or odd.....................`);
var evenOrOdd = checkEvenOrOdd(29);
console.log(`29 is ${evenOrOdd}`);
evenOrOdd = checkEvenOrOdd(44);
console.log(`44 is ${evenOrOdd}`);
evenOrOdd = checkEvenOrOdd(0);
console.log(`0 is ${evenOrOdd}`);
evenOrOdd = checkEvenOrOdd(101);
console.log(`101 is ${evenOrOdd}`);
console.log(`\n3) check length of given word is even or odd.....................`);
var lengthEvenOdd=checkLengthEvenOrOdd("Javascript");
console.log(`javaScript length is ${lengthEvenOdd}`);
lengthEvenOdd=checkLengthEvenOrOdd("developer");
console.log(`developer length is ${lengthEvenOdd}`);
lengthEvenOdd=checkLengthEvenOrOdd("Google");
console.log(`Google length is ${lengthEvenOdd}`);
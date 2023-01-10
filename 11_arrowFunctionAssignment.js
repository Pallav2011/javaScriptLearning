console.log(`1) Arrow function with no argument and no return value\n`);
const simpleArrowFunction= ()=>console.log(`Good Morning, today is Monday`);
simpleArrowFunction();
console.log(`-----------------------------------------------------------`);
console.log(`2) Arrow function with 3 argument and no return value\n`);
const multiply=(num1,num2,num3=1)=>{
    const mul=num1*num2*num3;
    console.log(`Multiplication of (${num1}*${num2}*${num3}) is ${mul}`);
}
multiply(5,5,2);
multiply(10,4);
console.log(`-----------------------------------------------------------`);
console.log(`2) Arrow function with 5 argument and return value\n`);
const addition=(val1,val2,val3,val4,val5)=>{
   const add=val1+val2+val3+val4+val5;
   return add;
}
const numberResult = addition(100,100,200,349,756);
console.log(`Addition of given numbers are : ${numberResult}`);
stringResult=addition("I am"," learning"," ES6", " features"," in depth");
console.log(`Addition of given strings are : ${stringResult}`);

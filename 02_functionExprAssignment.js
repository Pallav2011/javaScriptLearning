var findSquare=function (num) {
    console.log("Square of ",num,"=",num*num);
}

var areaOfRectangle=function (val1,val2) {
    console.log("\n3) Area of Rectangle plot is =",val1*val2);
}

var swapValues=function (value1,value2) {
    console.log("Values before swaping = ",value1,value2);
    var temp;
    temp=value1;
    value1=value2;
    value2=temp;
    console.log("Values after swaping = ",value1,value2);
}

var stringOperation=function(op1){
console.log("A) total charecters available in the string is =",op1.length);
console.log("B) charecter at Index 6 =",op1.charAt(6));
console.log("C) charecter at Index 11 =",op1.charAt(11));
console.log("D) Last charecter in given string is =",op1.charAt(op1.length-1));
console.log("E) first charecter in given string is =",op1.charAt(0));
console.log("F1) Length of given string is =",op1.length);
console.log("F2) Square of lenth of given string is =",op1.length*op1.length);
}

console.log("1) Functions Expression for to find Square of given values");
findSquare(5);
findSquare(6);
findSquare(25);
findSquare(100);
console.log("\n2) type of function Expression is =",typeof(findSquare));
areaOfRectangle(499,917);
console.log("\n4) Functions Expression for swaping of given values");
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("\n5) Function expression for string operations");
stringOperation("JS the most popular language");
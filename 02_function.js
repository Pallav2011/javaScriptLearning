
function simpleFunction1() {
  console.log("first function - i will do more practice ");
}

function simpleFunction2() {
  console.log("second function - i give my 200% to perfect mayself");
}

function personalDetails(firstName,lastName,collegeName) {
  console.log("First Name = ",firstName,"\nLast Name = ",lastName,"\nCollege Name = ",collegeName);
}

function swapValuesDude(value1,value2) {
    console.log("Values before swaping = ",value1,value2);
    var temp;
    temp=value1;
    value1=value2;
    value2=temp;
    console.log("Values after swaping = ",value1,value2);
}

function addThreeValues(val1,val2,val3) {
  return val1+val2+val3;
}
console.log("Q.1) function with no arguments and no return any value\n");
simpleFunction1();
simpleFunction2();
console.log("-----------------------------------------------------------------\n");
console.log("Q.2) function with arguments but no return any values\n");
personalDetails("Pandurang","Ranpise","KBP College, Pandharpur");
console.log("-----------------------------------------------------------------\n");
console.log("Q.3) function of swaping given values\n");
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log("-----------------------------------------------------------------\n");
console.log("Q.4) function to addition of given values, it returns the addition\n");
console.log(addThreeValues(10.23,600,40));
console.log(addThreeValues("Hello","Good","Morning"));
let factNumber = 5;
let factValue;
let factorial = 0;
for (let index = 1; index <= factNumber; index++) {
  factValue = factNumber * (factNumber-1);     
  factNumber-- ;
}
console.log(`factorial of ${factNumber} is ${factValue}`);

let myObj = {
  myName : 'abcd',
  myAge : 25,
  address : {
    city : 'Pandharpur',
    state : "MH"
  }
}

let {myName,myAge,address} = myObj;
console.log(`May name is ${myName} and age is ${myAge} and adress is ${address.city}`);
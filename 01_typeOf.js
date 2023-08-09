var bankName;
console.log("***** Before Initialisation *****");
console.log("bankName=",bankName);
console.log("Datatype=", typeof(bankName));
bankName="SBI Bank";
console.log("***** After Initialisation *****");
console.log("bankName=",bankName);
console.log("Datatype=", typeof(bankName));

var marks='90%';
console.log("\nDatatype of marks=",typeof(marks));

var isWorking;
console.log("\n***** Before Initialisation *****");
console.log("value of isWorking=",isWorking);
isWorking=true;
console.log("***** After Initialisation *****");
console.log("value of isWorking=",isWorking);
console.log("Datatype of isWorking=",typeof(isWorking));

var totalCount="Hundred and Seven";
console.log("");
console.log(typeof(totalCount),totalCount);
totalCount=107;
console.log(typeof(totalCount),totalCount);

// var myName='pandurang';
// var myReverseName=' ';
// for (let index = myName.length-1; index >= 0; index--){
//     myReverseName+=myName[index];
// }
// console.log(myReverseName);


const a= 2;
const b = "4";
const c = a+b;
console.log(c);
console.log(0 == " "); // true
console.log(0=='0'); // true
console.log(0==false); // true
console.log(null==undefined); // true
console.log(1==[1]); // true
console.log(1==true); // true
console.log(1=='1'); // true
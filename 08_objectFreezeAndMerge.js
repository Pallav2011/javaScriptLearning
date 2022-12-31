const personalDetails={
    name:"Pandurang Ranpise",
    age:25,
    adress:"Pandharpur",
    contact:"9145437409",
    email:"ranpisepg09@gmail.com"
}
console.log(`1)Personal Details object`);
console.log(personalDetails);
const collegeDetails={
    collegeName:"KBP college",
    location:"Pandharpur",
    department:"BCS",
    university:"Solapur"
}
console.log(`-----------------------------------------------------------`);
console.log(`2)College Details object`);
console.log(collegeDetails);
console.log(`-----------------------------------------------------------`);
console.log(`3)Merge these two objects`);
Object.assign(personalDetails,collegeDetails);
console.log(personalDetails);
console.log(`-----------------------------------------------------------`);
console.log(`4)Array of friendName is created and freezed`);
const friendNames=["Nitin","Rahul","Onkar","Mayur","Samadhan"];
Object.freeze(friendNames);
console.log(`-----------------------------------------------------------`);
console.log(`5)Array of friendName itrated using for of loop`);
for (const element of friendNames) {
    console.log(element);
}
let company="Codemind Technology";
console.log(`-----------------------------------------------------------`);
console.log(`Given string is : ${company}`);
console.log(`-----------------------------------------------------------`);
console.log(`6a)Reverse Technology word`);
let indexOFSpace=company.indexOf(" ");
let reverseString="";
for (let index = company.length-1; index > indexOFSpace-1; index--) {
    const element = company[index];
    reverseString+=element;
}
console.log(reverseString);
console.log(`-----------------------------------------------------------`);
console.log(`6b)Expected output`);
let replaceString =company.replace("Technology",reverseString);
console.log(replaceString);
// const sbiBank={
//     bankName:"State bank if India",
//     location:"Laxmi path, Pandharpur",
//     accountNo:"789963321147",
//     ifsc:"SBIN0000446",
//     intrestRate:"6%",
//     showDetails:function(){
//     console.log(`Bank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
//     }
// }
// const axisBank={
//     bankName:"Axis Bank",
//     location:"near new bus stand,Pandharpur",
//     accountNo:"258987456321",
//     ifsc:"AXIS00225",
//     intrestRate:"7.5%",
//     showDetails:function(){
//         console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
//         }
// }
// const hdfcBank={
//     bankName:"HDFC Bank",
//     location:"near sargam cinema, Pandharpur",
//     accountNo:"41234569852369",
//     ifsc:"HDFC00285",
//     intrestRate:"9%",
//     showDetails:function(){
//         console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
//         }
// }
// const yesBank={
//     bankName:"YES Bank",
//     location:"station road, Pandharpur",
//     accountNo:"147852369456",
//     ifsc:"YES00112",
//     intrestRate:"8.3%",
//     showDetails:function(){
//         console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
//         }
// }
// sbiBank.showDetails();
// axisBank.showDetails();
// hdfcBank.showDetails();
// yesBank.showDetails();

// let obj={
//     name:'pandurang',
//     id:101
// }

// let {name,id}=obj;
// console.log(name,id);

// let arr=[1,2,5,6,89,45];
// let[val1,val2,val3,val4,val5,val6]=arr;
// console.log(val1,val2,val3,val4,val5,val6);

// (function my(){
//     console.log(`i am iife`);
// })();

// function onefunction(){
//     console.log(`i am first function`);
// }
// function secondfunction(argFunction) {
//     console.log(`my work is done`);
//     argFunction();
// }
// secondfunction(onefunction);

// setTimeout(function my() {
//     console.log(`i am run after 5 seconds`);
// },5000);

// let transformArr=arr.map(currentValue=> currentValue*10);
// console.log(transformArr);

// let filteredArr=arr.filter(currentVal=>currentVal>40);
// console.log(filteredArr);

// let reducedArr=arr.reduce((runningTotal,value)=>{
//     return runningTotal+value;
// });
// console.log(`sum of array is ${reducedArr}`);

// let arrString=['pandurang','sandesh','dattaraj','aditya','mahesh'];
// console.log(arrString.sort());

// let arrNumber=[54,1,125,56,85,96,42,21,65];
// let sortedArr=arrNumber.sort((val1,val2)=> val1>val2?1:-1
// );
// console.log(sortedArr);

// class myDetails{
//     constructor(id,name,){
//         this.id=id;
//         this.name=name;
//     }
// }
//  let obj1=new myDetails(101,'pandurang');
//  let obj2=new myDetails(102,'sandesh');
//  let obj3=new myDetails(103,'mahesh');
//  let obj4=new myDetails(104,'viky');
//  let obj5=new myDetails(105,'aditya');
//  let arrOfObject=[obj1,obj2,obj3,obj4,obj5];
//  let sortedArrOfObject=arrOfObject.sort((val1,val2)=>{
//     return val1.name>val2.name ?1:-1;
//  });
// sortedArrOfObject.forEach(function (val) {
//     console.log(val);
// })

// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(`normal array is ${arr}`);
// console.log(`reversed arra us ${arr.reverse()}`);
 
// let myNameString='jlsdjshfbf';


// let arrString=myNameString.split('');

// arrString=[1,1,1,1,2,2,2,3,3,4];
// let count={};
// arrString.forEach(element => {
//     if(!count.hasOwnProperty(element)){
//         count[element]=0;
//     }
//     count[element]++;
// });
// console.log(count);
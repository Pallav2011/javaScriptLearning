// Swap two values

console.log("swaping assignment - 1");
var sweety="Sweety", cutie="Cutie";
console.log("*******Before Swaping Values*********");
console.log(sweety,cutie);
var temp=sweety;
sweety=cutie;
cutie=temp;
console.log("*******After Swaping Values*********");
console.log( sweety,cutie);

console.log("\n\nswaping assignment - 2");
var num1=100,num2=200,num3=300;
console.log("*******Before Swaping Values*********");
console.log(num1,num2,num3);
temp=num1;
num1=num2;
num2=num3;
num3=temp;
console.log("*******After Swaping Values*********");
console.log(num1,num2,num3);

//  To count the vowels in given string

let stringName='mynameispandurang';
let vowelCount=0;
for (let index = 0; index < stringName.length-1; index++) {
    let char1=stringName.charAt(index);
    let char=char1.toLowerCase();
    if (char=='a' || char=='e' || char=='i' || char=='o'||char=='u') {
        vowelCount++;
    } 
}
console.log(`total Vowels are ${vowelCount}`);

// to count the quantity of charecters in given string

let myString='wearindian';
count={};
stingArr=myString.split('');
stingArr.forEach( (element) => {
    if (!count.hasOwnProperty(element)) {
        count[element]=0;
    }
    count[element]++;
});
console.log(JSON.stringify(count));

//to seprate the even and odd numbers in given array and find the sum of all elements array

Arr =[ 1,2,3,4,5,6,7,8,9];
evenarr=[];
oddarr=[];
Arr.forEach(element => {
    if(element%2==0){
        evenarr.push(element);
    }
    else{
        oddarr.push(element);
    }
});
console.log('Even array',evenarr);
console.log('Odd array',oddarr);
let sum=Arr.reduce((val1,val2)=>{
    return val1+val2;
})
console.log(sum);

// what is the output of following code
{
    let x =7;
    var y =10
}
console.log(y);
// console.log(x); //error : cannot access variable before initialisation 
let x=10;

// remove duplicate numbers in given array without using set

const arrOFNumbers = [1, 2, 3, 2, 1, 4];
newarr=[];
arrOFNumbers.forEach(element => {
    if(!newarr.includes(element)){
        newarr.push(element);
    }      
});
console.log(newarr);

//sort the array of 0 and 1 in ascending order

let arrOfZeroOne=[0,0,0,1,1,0,1,1];
let sortedarray=arrOfZeroOne.sort((val1,val2)=>{
    return val1-val2;
})
console.log(sortedarray);

//sort the array of 0 and 1 without using sort method- tech-1

let arrLength=arrOfZeroOne.length;
let zeroCount=0;
let sortedarr=[];
for (const element of arrOfZeroOne) {
    if (element==0) {
        zeroCount++;
    }
}
for (let index = 0; index <= zeroCount-1; index++) {
    sortedarr.push(0);
}

for (let index = 0; index < arrLength-zeroCount; index++) {
    sortedarr.push(1);
}

console.log(sortedarr);

//sort the array of 0 and 1 without using sort method- tech-2

let arr=[0,0,0,1,1,0,1,1];
let sort;
for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    if(arr[i]>arr[j]){
      sort = arr[i];
      arr[i] = arr[j];
      arr[j] = sort;
    }
  }
}
console.log(arr)

// function foo(obj1){
//     obj1.name='trial'
//     console.log(obj1.name);
//     console.log(obj.name);
// }

// let hetrogenious=['abcd',1,true];
// console.log(hetrogenious);

// const obj={
//     name:'test'
// }

// foo(obj);
// console.log(obj.name);

// function foo(){
// console.log(a);
// }
// foo();
// a=10;
// let a;

// var a='hey';
// let a='hellow';
// console.log(a);

// let fruits={
//     apple:2,
//     mango:6,
//     banana:5
// }
// console.log(Object.values(fruits));
// console.log(Object.keys(fruits));
// let arr=[];
// for (const key in fruits) {
//     if (Object.hasOwnProperty.call(fruits, key)) {
//         const element = fruits[key];
//         arr.push(element);
//         // console.log(element);
//     }
// }
// console.log(arr);

// let student = {
//     id: 2,
//     name: "Ravi",
//     age: 25
//     }
//     let info = student;
//     info.id = 5;
//     console.log(student.id);

// let mystring='pandurang';
// let splittedString=mystring.split('');
// console.log(splittedString);
// let sortedArr= splittedString.sort((a,b)=>{
// return a>b ? 1 : -1;
// });
// console.log(sortedArr);
// console.log(sortedArr.join(''));

// let string1='india';
// let string2='nidia';

// let sorted1=string1.split('').sort().join('');
// let sorted2=string2.split('').sort().join('');

// if (sorted1==sorted2) {
//     console.log('given value is anagram');
// }
// else console.log('given value is not anagram');

// nums=[1,1,1,1,2,2,2,3,3,4];
// let count={};
// nums.forEach(element => {
//     if (!count.hasOwnProperty(element)) {
//         count[element]=0;
//     }
//     count[element]++;
// });
// console.log(count);

// var sentence='i am pandurang ranpise';
// console.log(sentence.split(' ').reverse().join(' '));

// let arrayList=[1,2,3,4,5,6,];
// console.log(arrayList);
// arrayList=[];
// console.log(arrayList);

// console.log(arrayList);
// for (let index = arrayList.length; index >0 ; index--) {
    
//     arrayList.pop();
// }
// console.log(`blank array`,arrayList);


// function createBase(baseNumber) {
//     return function(N) {
//       return baseNumber + N;
//     }
//   }
  
//   var addSix = createBase(6);

//   console.log(addSix(10));
//   console.log(addSix(21));

// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//       b = i % 5 == 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//   }

// var firstWord = "Mary";
// var secondWord = "Army"

// let sorted1=firstWord.split('').sort().join('');
// console.log(sorted1);

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// function one(val1){
//     return function two(val2){
//         return val1+val2;
//     }
// }

// console.log(one(10)(20));

// let a=0.1+0.2;
// console.log(a);
// let b=0.3;
// if(a===b){
//     console.log(true);
// }
// else
// console.log(false);

// let myPromise = new Promise((resolve,reject)=>{
//     reject('promise is reject');
// });

// myPromise.then(res=>{
//     console.log('then code=>',res);
// }).catch(res=>{
//     console.log('cath code=>',res);
// })

//  function delIsAvailable() {
//     return true;
//  }


//   function hpIsAvailable(){
//     return false;
//   }
   


// let laptopPromise=new Promise((resolve,reject)=>{
//     if(this.delIsAvailable()){
//        return setTimeout(()=>{
//             resolve('dell is available');
//         },3000);

//     }else if(this.hpIsAvailable()){
//       return  setTimeout(()=>{
//             resolve('hp is available');
//         },3000)
//     }else{
//         return setTimeout(()=>{
//             reject('both are not available');
//         },3000)
//     }

// })

// laptopPromise.then((res)=>{
//     console.log(res);
// }).catch(()=>{
//     console.log(res);
// })

// let d=new Date();
// console.log(d());

// let stringname='i am the pqr and psq';
// console.log(stringname.indexOf('pqr'));

// let a=new String('test');
// console.log(typeof a); 
// console.log(a.valueOf());
// console.log(typeof a.valueOf());
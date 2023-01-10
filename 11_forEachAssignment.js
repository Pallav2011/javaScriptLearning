const arrayNumbers= [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given array is:`);
console.log(arrayNumbers);
console.log(`---------------------------------------------------`);
console.log(`1) Elements in array with its index using forEach() with arrow function`);
arrayNumbers.forEach((currentValue,index)=>{
    console.log(`Element is ${currentValue} and its index is ${index}`);
});
console.log(`---------------------------------------------------`);
console.log(`2) Positive elements in given array `);
let positiveArray=[];
arrayNumbers.forEach((currentValue)=>{
    if(currentValue>0)
   positiveArray.push(currentValue);
});
console.log(positiveArray);
console.log(`---------------------------------------------------`);
console.log(`3) Negative elements in given array `);
let negativeArray=[];
arrayNumbers.forEach((currentValue)=>{
    if(currentValue<0)
    negativeArray.push(currentValue);
});
console.log(negativeArray);
console.log(`---------------------------------------------------`);
console.log(`4) Even Numbers in given array `);
let evenArray=[];
arrayNumbers.forEach((currentValue)=>{
    if(currentValue%2==0)
    evenArray.push(currentValue);
});
console.log(evenArray);
console.log(`---------------------------------------------------`);
console.log(`5) Sum of all array elements`);
let sum=0;
arrayNumbers.forEach((currentValue)=>{
sum+=currentValue;
});
console.log(`The sum of all array elements is ${sum}`);
console.log(`---------------------------------------------------`);
console.log(`6) Even positioned array values in given array `);

arrayNumbers.forEach((currentValue,index)=>{
    if(index%2==0)
   console.log(currentValue);
});
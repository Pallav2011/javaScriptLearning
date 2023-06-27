console.log(`---------------------------------------count the given charecter from string`);
var stringName='Pandurang';
var count=0;
for (let index = 0; index < stringName.length; index++) {
    const element = stringName[index];
    if(element=='g')
    {
        count=count+1;
    }
}
console.log(`in ur string "g" is ${count} times`);

console.log(`-----------------------------------------reverse array----------------------`);
let arrNumber=[1,2,3,4,5,6];
console.log(arrNumber);
let reversearr=arrNumber.reverse();
console.log(reversearr);

console.log(`-------------------------------------------array distructuring--------------------`);
let [val2,...val1]=arrNumber;
console.log(val1);
console.log(`-------------------------------------------object distructuring--------------------`);
let objectMyDetails={
    name:'pandurang',
    id:101
}
let {name,id}=objectMyDetails;
console.log(`name is ${name} and id is ${id}`);
console.log(`-------------------------------------------array reduce()--------------------`);
let res=arrNumber.reduce((runningTotal,val)=>{
    return runningTotal+val;
},200)
console.log(res);
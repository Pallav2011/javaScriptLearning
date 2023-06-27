const arrayNums=[20,3,4,56,90,400,49];
console.log(`Given Array is :`);
console.log(arrayNums);
let clonedArray=arrayNums;// shallow cloning is performed on two arrays
console.log(`Colned array is :`);
console.log(clonedArray);
console.log(`---------------------------------------------------`);
console.log(`Step 1:`);
clonedArray.push(55,66);
console.log(`Original array is : `);
console.log(arrayNums);
console.log(`Cloned array is : `);
console.log(clonedArray);
console.log(`---------------------------------------------------`);
console.log(`Step 2:`);
let clonedArrayDeep=[...arrayNums];// deep cloning using spread operator
clonedArrayDeep.push(10,25);
console.log(`Original array is : `);
console.log(arrayNums);
console.log(`Cloned array is : `);
console.log(clonedArrayDeep);
console.log(`---------------------------------------------------`);
console.log(`Step 3:`);
let arrayEven=[2,30,14,8];
console.log(`Given Array is :`);
console.log(arrayEven);
console.log(`Cloned array by using spread operator is : `);
let concateArray=[...arrayEven, ...arrayNums];
console.log(concateArray);
console.log(`---------------------------------------------------`);
console.log(`Step 4: Object is created`);
const employeeInfo={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    adress:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Pokli, 431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 9145 4374 09","1800-4567-32","+91 8379 00005 07"]
}
console.log(`---------------------------------------------------`);
console.log(`Step 5:`);
console.log(`Adress: ${employeeInfo.adress.locality.colony}, ${employeeInfo.adress.locality.street}, ${employeeInfo.adress.city}, ${employeeInfo.adress.state}, ${employeeInfo.adress.country}`);
console.log(`Mobile numbers: ${employeeInfo.mobiles}`);
console.log(`---------------------------------------------------`);
console.log(`Step 6a:`);
let clonedObject=JSON.parse(JSON.stringify(employeeInfo));
console.log(`before update salary of july_month to 80k`);
console.log(clonedObject.salary);
clonedObject.salary.july_month="80,0000INR";
console.log(`after update salary of july_month to 80k`);
console.log(clonedObject.salary);
console.log(`---------------------------------------------------`);
console.log(`Step 6b:`);
console.log(`before update country`);
console.log(employeeInfo.adress);
employeeInfo.adress.country="United Kingdome";
console.log(`after update country`);
console.log(employeeInfo.adress);
console.log(`---------------------------------------------------`);
console.log(`Step 6c:`);
console.log(`updated values of original object :`);
console.log(JSON.stringify(employeeInfo));
console.log(`\nupdated values of Cloned object :`);
console.log(JSON.stringify(clonedObject));


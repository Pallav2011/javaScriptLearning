class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId=empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }
}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika=new Employee(77,"Monika","IT",40000,"Wipro");
const empViny=new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new Employee(99,"Mahesh","HR",85000,"infy");
const arrayEmps=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(`1)All employees from wipro company`);
const wiproArray=arrayEmps.filter(value=>value.empCompany=="Wipro");
wiproArray.forEach(currentValue => console.log(currentValue));
console.log(`-----------------------------------------------------------------`);
console.log(`2)All employees from "IT" or "HR" dept`);
const arrayITorHRdept=arrayEmps.filter(value=>value.empDept=="IT" || value.empDept=="HR");
arrayITorHRdept.forEach(currentValue => console.log(currentValue));
console.log(`-----------------------------------------------------------------`);
console.log(`3)All employees whose empID's are greater than 50`);
const empIDArray=arrayEmps.filter(value=>value.empId>50);
empIDArray.forEach(currentValue => console.log(currentValue));
console.log(`-----------------------------------------------------------------`);
console.log(`4)All employees whose name starts with 'A' or 'V' or 'M'`);
const empNameArray=arrayEmps.filter(value=>value.empName.startsWith("A") ||value.empName.startsWith("V") ||value.empName.startsWith("M"));
empNameArray.forEach(currentValue => console.log(currentValue));
console.log(`-----------------------------------------------------------------`);
console.log(`5)Average salary of all employees`);
let arraySalary=[];
arrayEmps.forEach((value)=>{
    arraySalary.push(value.empSalary);
});
console.log(arraySalary);
const result=arraySalary.reduce((runningTotal,value)=>{
return runningTotal+value;
});
console.log(`Average Salary: ${result/arraySalary.length}`);
console.log(`-----------------------------------------------------------------`);
console.log(`6)Average salary of 'IT' Department`);
const arrayITSalary=arrayEmps.filter(value=>value.empDept=="IT");
let salaryIT=[];
arrayITSalary.forEach((value)=>{
    salaryIT.push(value.empSalary);
});
console.log(salaryIT);
const resultITSal=salaryIT.reduce((runningTotal,value)=>{
    return runningTotal+value;
    });
console.log(`Average salary of IT department is: ${resultITSal/salaryIT.length}`);


// class empSal{
//     constructor(sal){
//         this.sal=sal;
//     }
// }
// const emp1=new empSal(20000);
// const emp2=new empSal(45000);
// const emp3=new empSal(50000);
// const emp4=new empSal(80000);
// const emp5=new empSal(65000);
// let arrOfEmp=[emp1,emp2,emp3,emp4,emp5];
// calSalary=[];
// arrOfEmp.forEach(val=>{
//     calSalary.push(val.sal);
// })
// const totalsal=calSalary.reduce((runningTotal,val)=>{
//     return runningTotal+val;
// })
// console.log(`total sal ${totalsal}`);

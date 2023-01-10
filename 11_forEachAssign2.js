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
console.log(`1) TCS Epmloyee Details`);
const empArray=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
empArray.forEach(currentValue=>{
    if(currentValue.empCompany=="TCS")
    console.log(`Name is ${currentValue.empName} and Company is ${currentValue.empCompany}`);
});
console.log(`-----------------------------------------------------------------------`);
console.log(`2) Epmloyees with salary greater than or equal to 50000`);
empArray.forEach(currentValue=>{
    if(currentValue.empSalary>=50000)
    console.log(currentValue);
});
console.log(`-----------------------------------------------------------------------`);
console.log(`3) Sum of all Employees`);
let sum=0;
empArray.forEach(currentValue=>sum += currentValue.empSalary);
console.log(`Sum of all employees salary is ${sum}`);
console.log(`-----------------------------------------------------------------------`);
console.log(`4) find Average salary of all employee`);
console.log(`Average Salary of all employee = ${sum/empArray.length}`);
console.log(`-----------------------------------------------------------------------`);
console.log(`5) IT or HR department employees whose salary greater than or equal to 75000`);
empArray.forEach(currentValue=>{
    if((currentValue.empDept=="IT"||currentValue.empDept=="HR")&& currentValue.empSalary>=75000)
    console.log(currentValue);
});
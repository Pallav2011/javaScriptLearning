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
const arraEmployees=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(`1) sorting array of employees in ascending order by ID:`);
const sortedArrayByID = arraEmployees.sort((id1,id2)=> id1>id2 ? -1 : 1 );
sortedArrayByID.forEach(val=>console.log(`Employee ID is: ${val.empId}, Name: ${val.empName} and Dept: ${val.empDept}`));
console.log(`-------------------------------------------------------------------------------`);
console.log(`2) sorting array of employees in ascending order by Department:`);
const sortedArrayByDept = arraEmployees.sort((id1,id2)=> id1.empDept>id2.empDept ? 1 : -1 );
sortedArrayByDept.forEach(val=>console.log(`Employee ID is: ${val.empId}, Dept: ${val.empDept} and Company: ${val.empCompany}`));
console.log(`-------------------------------------------------------------------------------`);
console.log(`3) sorting array of employees in ascending order by Salary:`);
const sortedArrayBySalary = arraEmployees.sort((id1,id2)=> id1.empSalary>id2.empSalary ? -1 : 1 );
sortedArrayBySalary.forEach(val=>console.log(`Employee Name is: ${val.empName}, Salary: ${val.empSalary} and Company: ${val.empCompany}`));
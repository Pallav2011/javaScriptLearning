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
const mapEmployees=new Map();
mapEmployees.set(22,empAnil);
mapEmployees.set(33,empRadha);
mapEmployees.set(55,empRishi);
mapEmployees.set(66,empSonali);
mapEmployees.set(77,empMonika);
mapEmployees.set(88,empViny);
mapEmployees.set(99,empMahi);
mapEmployees.forEach((value,key)=>{
console.log(`${key}===> Name: ${value.empName}, Dept: ${value.empDept}, Company: ${value.empCompany}, Salary: ${value.empSalary}`);
});

// class EmpDetails{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
// }

// const emp1=new EmpDetails(101,'pandurang');
// const emp2=new EmpDetails(102,'rahul');
// const emp3=new EmpDetails(103,'kiran');
// const emp4=new EmpDetails(104,'sagar');
// const myMap=new Map();
// myMap.set(101,emp1);
// myMap.set(102,emp2);
// myMap.set(103,emp3);
// myMap.set(104,emp4);
// myMap.forEach((value,key)=>{
//     console.log(`${key} and value is ${value.name}`);
// })
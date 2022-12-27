const professor ={

}
console.log(`This is an empty object`);
console.log(professor);

console.log(`1) Properties added in object`);
professor.name="Mark Zukerberg";
professor.age=40;
professor.adress="Pandharpur";
professor.hight=6;
professor.weight = 65;
console.log(professor);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`2)include Nested object 'degrees'`);
professor.degrees={graduation:"Bsc.Computer Science",postGraduation:"Msc.Computer Science",PHD:"Adv. Computing"};
console.log(professor);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`3)Add Nested object 'certificates'`);
professor.certificates={certificateHaker:"Haker Rank Participation",certificateIFE:"Certificate in IFE course",certificatePrograms:"Certificate in Adv programming"};
console.log(professor);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`4)Add function as a value for concate degrees`);
professor.concateDegree={concatDgree:function(){
    let conDgree=professor.degrees.graduation+professor.degrees.postGraduation+professor.degrees.PHD;
    return conDgree;
}}
console.log(`teacher total degrees are : ${professor.concateDegree.concatDgree()}`);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`5)Added new property "Work Experience" and log on console`);
professor.WorkExperience="5 years";
console.log(`Work Experience of Professor is : ${professor.WorkExperience}`);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`6)Modify any one  existing property and log complete object`);
console.log(`Before Modify existing property of object`);
console.log(professor);
professor.name="Pandurang Ranpise";
console.log(`After Modify existing property of object`);
console.log(professor);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`7)Delete any one  certificate from nested object`);
console.log(`Before Delete anyone Certificate form nested object is :`);
console.log(professor.certificates);
delete professor.certificates.certificateIFE;
console.log(`After Delete anyone Certificate form nested object is :`);
console.log(professor.certificates);

console.log(`---------------------------------------------------------------------------\n`);
console.log(`8)Add new certificate in nested object 'certificate'`);
console.log(`before adding new certificate in nested object`);
console.log(professor.certificates);
professor.certificates.certificateAngular="Certificate in Angular8";

console.log(`---------------------------------------------------------------------------\n`);
console.log(`9)Log the nested object 'certificate' on console`);
console.log(professor.certificates);
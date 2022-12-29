class Vehicles{
    constructor(vehicleType,company,vehicleName,chessisNo){
    console.log(`Vehicle types : ${vehicleType}, Company : ${company}, Vehicle Name : ${vehicleName}, Chessis No : ${chessisNo}`);
    }
}
console.log(`Question No :1)Vehicle Class\n`);
const vehicleHero=new Vehicles("Two Wheeler","Hero Honda","Splender",12456);
const vehicleInnova=new Vehicles("Four Wheeler","Toyota","Innova Crysta",965874);
const vehicleMahindra=new Vehicles("Three Wheeler","Mahindra","Riksha",147521);
const vehicleSonalika=new Vehicles("Four Wheeler","Sonalika","Tractor",985214);
const vehicleBajaj=new Vehicles("Two Wheeler","Bajaj","KTM",967825);
console.log(`-------------------------------------------------------------------------------`);
console.log(`Question No :2)College Class`);
class College{
  constructor(name,id,location,university){
    this.name=name;
    this.id=id;
    this.location=location;
    this.university=university;
 }
 showDetails(){
    console.log(`College Name : ${this.name},College ID : ${this.id},Location : ${this.location},University : ${this.university}`);
 }
}
const collegeKbp=new College("KBP college",4123,"Pandharpur","Solapur");
collegeKbp.showDetails();
const collegeModern=new College("Modern college",9825,"Shivaji nagar","Pune");
collegeModern.showDetails();
const collegeDYPatil=new College("Dr.D.Y.Patil college",6458,"Kasaba bavada","kolhapur");
collegeDYPatil.showDetails();
const collegeMHINstitute=new College("Maharashtra college",8545,"Deolai Parisar","Aurangabad");
collegeMHINstitute.showDetails();
console.log(`-------------------------------------------------------------------------------`);
console.log(`Question No :3)traverse object with one argument`);
function traverseObject(collegeKbp) {
    for (const key in collegeKbp) {
        if (Object.hasOwnProperty.call(collegeKbp, key)) {
            const element = collegeKbp[key];
            console.log(`Key :${key}, Element:${element}`);
        }
    }
    console.log(`\n`);
}
traverseObject(collegeKbp);
traverseObject(collegeModern);
traverseObject(collegeDYPatil);
traverseObject(collegeMHINstitute);

console.log(`Question 4)Fibonnacy series`);
function fibonnacySeries() {
    let num1=0;
    let num2=1;
    console.log(num1,num2);
   for (let index = 0; index <=5; index++) {
    let num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;
   }
}
fibonnacySeries();
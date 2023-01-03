console.log(`Step A: Class is created`);
class Bank{
constructor(bankName,location,accountNo,ifsc,intrestRate){
    this.bankName=bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.ifsc=ifsc;
    this.intrestRate=intrestRate;
}
}
console.log(`----------------------------------------------------------`);
console.log(`Step B: Objects are created`);
const axisBank=new Bank("Axis Bank","Pandharpur","123456789369","AXIS0000124","6%");
const sbiBank=new Bank("State bank of India","Mumbai","789456123741","SBIN000446","5.8%");
const iciciBank=new Bank("ICICI Bank","Pune","654147987258","ICICI0011","8%");
const kotakBank=new Bank("Kotak Bank","Dilhi","852369741258","KOTAK085","8.6%");
const hdfcBank=new Bank("HDFC Bank","Solapur","456963258741","HDFC00225","8.7%");
const panjabBank=new Bank("Panjab Bank","kolhapur","258963147852","9%");
console.log(`----------------------------------------------------------`);
console.log(`Step C: Add all object elements in array & traverse using for of loop`);
const bankArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];
for (const element of bankArray) {
    console.log(`Bank name is ${element.bankName} and location is ${element.location}`);
}
console.log(`----------------------------------------------------------`);
console.log(`Step D: Find the object which has name 'Kotak Bank'`);
for (const element of bankArray) {
    if(element.bankName=="Kotak Bank"){
console.log(element);
    }
}
console.log(`----------------------------------------------------------`);
console.log(`Step E: Log the details on console using for loop`);
for (const element of bankArray) {
    console.log(element);
}
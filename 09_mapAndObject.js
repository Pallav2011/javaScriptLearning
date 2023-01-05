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
console.log(`Step C: created Map`);
const mapBank=new Map();
mapBank.set("123456789369",axisBank);
mapBank.set("789456123741",sbiBank);
mapBank.set("654147987258",iciciBank);
mapBank.set("852369741258",kotakBank);
mapBank.set("456963258741",hdfcBank);
mapBank.set("258963147852",panjabBank);
const mapAxis=mapBank.keys();

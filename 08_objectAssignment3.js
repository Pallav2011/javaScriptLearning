class Bank{
constructor(bankName,location,accountNo,ifsc,intrestRate){
bankName=this.bankName;
location=this.location;
accountNo=this.accountNo;
ifsc=this.ifsc;
intrestRate=this.intrestRate;
}
}
const axisBank=new Bank("Axis Bank","Pandharpur","123456789369","AXIS0000124","6%");
const sbiBank=new Bank("State bank of India","Mumbai","789456123741","SBIN000446","5.8%");
const iciciBank=new Bank("ICICI Bank","Pune","654147987258","ICICI0011","8%");
const kotakBank=new Bank("Kotak Bank","Dilhi","852369741258","KOTAK085","8.6%");
const hdfcBank=new Bank("HDFC Bank","Solapur","456963258741","HDFC00225","8.7%");
const panjabBank=new Bank("Panjab Bank","kolhapur","258963147852","9%");
const bankArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];
console.log(bankArray);
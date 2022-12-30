function Bank(bankName,location,ifscCode,branchCode){
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
console.log(`Bank Details is: Bank name : ${this.bankName}, Location : ${this.location}, IFSC Code : ${this.ifscCode}, BranchCode :${this.branchCode}`);
}
const bankYes=new Bank("Yes Bank", "Pune", "YES001245", 85214);
const bankSbi=new Bank("state bank of India", "Pandharpur", "SBIN0000446", 44225);
const bankMAh=new Bank("Bank of MAharashtra", "Kolhapur", "MAH02145", 89324);
const bankAxis=new Bank("Axis bank", "Nagpur", "AXIS22512", 14526);
bankYes.openTime="9 AM IST";
bankYes.closeTime="6 pm IST";
bankAxis.openTime="9 AM IST";
bankAxis.closeTime="6 pm IST";
console.log(`-----------------------------------------------------------------------`);
console.log(`The open time  of SBI bank is ${bankYes.openTime} and close time is ${bankYes.closeTime}`);
console.log(`The open time  of Axis bank is ${bankAxis.openTime} and close time is ${bankAxis.closeTime}`);
console.log(`-----------------------------------------------------------------------`);
console.log(`The bank name is ${bankYes.bankName},Branch code is ${bankYes.branchCode} and open time is ${bankYes.openTime}`);
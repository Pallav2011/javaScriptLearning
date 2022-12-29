const sbiBank={
    bankName:"State bank if India",
    location:"Laxmi path, Pandharpur",
    accountNo:"789963321147",
    ifsc:"SBIN0000446",
    intrestRate:"6%",
    showDetails:function(){
    console.log(`Bank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
    }
}
const axisBank={
    bankName:"Axis Bank",
    location:"near new bus stand,Pandharpur",
    accountNo:"258987456321",
    ifsc:"AXIS00225",
    intrestRate:"7.5%",
    showDetails:function(){
        console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
        }
}
const hdfcBank={
    bankName:"HDFC Bank",
    location:"near sargam cinema, Pandharpur",
    accountNo:"41234569852369",
    ifsc:"HDFC00285",
    intrestRate:"9%",
    showDetails:function(){
        console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
        }
}
const yesBank={
    bankName:"YES Bank",
    location:"station road, Pandharpur",
    accountNo:"147852369456",
    ifsc:"YES00112",
    intrestRate:"8.3%",
    showDetails:function(){
        console.log(`\nBank Name : ${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC Code : ${this.ifsc}, Intrest :${this.intrestRate}`);
        }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
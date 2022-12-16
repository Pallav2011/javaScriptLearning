function maleMarriegeEligibilty(gender,age,boyName){
var res = gender=="male" && age>=21 ? `Hey ${boyName} you are eligible for marriage`
:`Hey ${boyName} you are not eligible for marriage`;
return res;
}

function femaleMarriegeEligibilty(gender,age,girlName){
    var res = gender=="female" && age>=18 ? `Hey ${girlName} you are eligible for marriage`
    :`Hey ${girlName} you are not eligible for marriage`;
    return res;
 }

console.log("Male Marriage Eligibilty check.........");
var checkEligible = maleMarriegeEligibilty("male",25,"Billgates");
console.log(checkEligible);
checkEligible = maleMarriegeEligibilty("male",17,"Stew jobs");
console.log(checkEligible);
console.log("-------------------------------------------------------\nFemale Marriage Eligibilty check.........");
checkEligible = femaleMarriegeEligibilty("female",16,"Jenifer");
console.log(checkEligible);
checkEligible = femaleMarriegeEligibilty("female",27,"Malinda Gates");
console.log(checkEligible);

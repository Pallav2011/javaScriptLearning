var marriageGenderEligible =function(gender,age){
if(gender=="Male"){
    if(age>=21){
        console.log(`Your are a ${gender} and your age is ${age}, so you are Elgibile for marriage`);
    }
    else {
        console.log(`Your are a ${gender} and your age is ${age}, so you are not Elgibile for marriage`);
    }
}else{
    if(gender=="Female"){
        if(age>=18){
            console.log(`Your are a ${gender} and your age is ${age}, so you are Elgibile for marriage`);
        }
        else {
            console.log(`Your are a ${gender} and your age is ${age}, so you are not Elgibile for marriage`);
        }
    }
    else{
        console.log(`Enter Valid Data,Either Male or female`);
    }  
}
}
marriageGenderEligible("Male",17);
marriageGenderEligible("Male",25);
marriageGenderEligible("Female",28);
marriageGenderEligible("Female",16);
marriageGenderEligible("Other",35);
marriageGenderEligible("Other",41);
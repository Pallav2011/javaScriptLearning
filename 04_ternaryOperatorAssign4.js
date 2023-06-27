var eligibilityTCS = function (gradScore,hscScore,sscScore,candName){
var res = gradScore>=70 || hscScore>=80 ||sscScore>=90 ? `Congrats ${candName} you are eligible for interview`
:`unfortunatly ${candName} you are not eligible for interview`;
console.log(res);
}
eligibilityTCS(80,50,90,"Pandurang");
eligibilityTCS(70,65,55,"Rahul");
eligibilityTCS(60,79,88,"Nitin");
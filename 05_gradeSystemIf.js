function gradeCalculation (marks){
    if(marks>=90 && marks<=100){
        console.log(`Fantastic marks ${marks}, your grade is A+`);
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent marks ${marks}, your grade is A`);
    }
    if(marks>=50 && marks<75){
        console.log(`Good marks ${marks}, your grade is B`);
    }
    if(marks>=35 && marks<50){
        console.log(`marks is ${marks}, your grade is C, Need improvement`);
    }
    if(marks<=0 || marks>100){
        console.log(`Please provide the valid marks`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);

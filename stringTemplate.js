console.log(`My dream company is "Tata Consultancy Services"\n`);

function stringTemplate(hobby1,hobby2,hobby3){
    console.log(`My hobbies are :${hobby1}, ${hobby2}, ${hobby3}\n`);   
    console.log("My hobbies are using concat :",hobby1.concat(hobby2,hobby3));
}
var hobbi1="listening Music";
var hobbi2="Surfing on Internet";
var hobbi3="Reading inspirational books"
stringTemplate(hobbi1,hobbi2,hobbi3);
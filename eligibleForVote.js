var checkVoteEligiblity= function (age){
if(age>=18 && age<=120){
console.log(`Age is ${age}, he is eligible for vote`);
}
if(age<18 && age>0){
console.log(`Age is ${age}, he is not eligible for vote`);
}
if(age<=0 || age>120){
 console.log(`Age is ${age}, invalid data`);
}
}
checkVoteEligiblity(45);
checkVoteEligiblity(17);
checkVoteEligiblity(8);
checkVoteEligiblity(20);
checkVoteEligiblity(-10);
checkVoteEligiblity(200);
checkVoteEligiblity(0);
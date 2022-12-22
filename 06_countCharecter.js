
function countCharA(stringName){
    var count=0;
for (let index = 0; index < stringName.length-1; index++) {
    var char =stringName.charAt(index);
    if(char=='A'||char=='a'){
        count=count+1;
    }   
}
return count;
}
var string1="I am learning JavaScript, The language of internet";
console.log(`String 1 : ${string1}`);
var totalCountA=countCharA(string1);
console.log(`Total number of "A" or "a" in String 1 is ${totalCountA}`);
console.log(`-------------------------------------------------------------------`);
var string2="My Favourite movie is LAggAn";
console.log(`String 2 : ${string2}`);
totalCountA=countCharA(string2);
console.log(`Total number of "A" or "a" in String 2 is ${totalCountA}`);
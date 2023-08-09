const mystring = "Pallav Ranpise";
let count = 0;
let chars =  mystring.toLowerCase().split('');
chars.forEach(ele => {
    if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u' ){
        console.log(`vowel is : ${ele}`);
        count++;
    }
})
console.log(`Total Vowels are : ${count}`);
let array1 = [1,0,2,3,4]; 
let array2 = [3,5,6,7,8,13];

for (let index = 0; index < array2.length; index++) {
    const element1 = array1[index];
    const element2 = array2[index];
    if(typeof(element1) == 'number'){
        if (typeof(element2) == 'number') {
        console.log(element1 + element2);
        }
    }
    else{
        console.log(element2 + 0);
    }
}
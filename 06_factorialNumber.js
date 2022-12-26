
function findFactorial(num){
    let fact=1;
    for (let index = 1; index <=num; index++) {
        fact=fact*index;
    }
   console.log(`factorial of ${num} is ${fact}`);
}
findFactorial(5);
findFactorial(7);
findFactorial(8);
findFactorial(12);
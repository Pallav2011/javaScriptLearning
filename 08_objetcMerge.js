const car={
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113 BHP"
}
console.log(`car object is :`);
console.log(car);
console.log(`carEngine object is :`);
console.log(carEngine);
console.log(`1) merge using object.assign()`);
let mergedObject=Object.assign(car,carEngine);
console.log(mergedObject);
console.log(`1) merge using spread operator`);
let mergedUsingSpread={...car,...carEngine};
console.log(mergedUsingSpread);
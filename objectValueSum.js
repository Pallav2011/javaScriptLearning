const responce={
    maran:{count:1},
    gas:{count:2},
    prelude:{count:5},
    key:['maran','gas','prelude']
};
let sum=0;
for (const key in responce) {
    if (Object.hasOwnProperty.call(responce, key)) {
        const element = responce[key];
       if(typeof element.count == "number")
       {
       sum=sum+element.count;
       }
    }
}
console.log(`Sum of count is :${sum}`);

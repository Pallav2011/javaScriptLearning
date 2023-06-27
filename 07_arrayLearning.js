 let arrayNumber=[5,8,6,1,4,2,9];
 console.log(arrayNumber);// to print array values
 console.log(arrayNumber.indexOf(2));// to find the index of perticular element
 console.log(arrayNumber[2]); // to find the charector at index position
 arrayNumber[3]=10; // update the array element
 console.log(arrayNumber);
 arrayNumber[6]="Pandurang";// it stores also different type of value
 console.log(arrayNumber);
 //to traverse the array elements one by one
 for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    console.log(element);
 }
 // we can display only even positioned chars in the array
 let arrayOfSequenceNumber=[12,24,5,32,4,1,15,27,9,6];
 for (let index = 0; index < arrayOfSequenceNumber.length; index=index+2) {
    const element = arrayOfSequenceNumber[index];
    console.log(element);
 }

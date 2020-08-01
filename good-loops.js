/**
 * Better ways to do loops
 */

const arr = [500, 30, 99, 15, 223];

//Bad way
const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < arr.length; i++) { 
    total += arr[i];             // Reduce
    withTax.push(arr[i] * 1.1);  // Map
    if (arr[i] > 100)  highValue.push(arr[i]) // Filter
}

//Good Ways

// Reduce
const total = arr.reduce((acc, cur) => acc + cur)

// Map
const withTax = arr.map(v => v * 1.1)

// Filter
const highValue = arr.filter(v => v > 100);


// Every
const everyValueGreaterThan50 = arr.every(v => v > 50)
const everyValueGreaterThan10 = arr.every(v => v > 10)
console.log(everyValueGreaterThan50) //false
console.log(everyValueGreaterThan10) //true

//Some
const someValueGreaterThan500 = arr.some(v => v > 500)
const someValueGreaterThan10  = arr.some(v => v > 10)
console.log(someValueGreaterThan500) //false
console.log(someValueGreaterThan10)  //true
/**
 * console-log() when it comes to objects
 */


//Basic objs 
const u    = { name: 'You',   age: 20 };
const bff  = { name: 'Best Friend',  age: 23};
const dad  = { name: 'Dad', age: 40 };

// Simple log
console.log(u);
console.log(bff);
console.log(dad);

// Strong logs

// Computed Property Names
console.log('%c My Friends', 'color: orange; font-weight: bold;' )
console.log({ u, bff, dad });

// Console.table(...)
console.table([u, bff, dad])

// Console.time
console.time('looper')
let i = 0;
while (i < 1000000) { i ++ }
console.timeEnd('looper')

// Stack Trace Logs
const deleteMe = () => console.trace('bye bye database')

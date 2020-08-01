/**
 * better objs, better arrays, better syntax, better days
 */

// Objects
const dog = { name: 'Rilley 🐶' }
const stats = { legs: 4, type: 'pug', meal: 7  }

//Tiring way to join obj
dog['legs'] = stats.legs
dog['type'] = stats.type
dog['meal'] = stats.meal

//Simple way to join obj
const sameObjWay1 = Object.assign(dog, stats) // { name: 'Rilley 🐶', legs: 4, type: 'pug', meal: 7 }
const sameObjWay2 = { ...dog, ...stats }      // { name: 'Rilley 🐶', legs: 4, type: 'pug', meal: 7 }


// Arrays
let birds = ['sparrows', 'finches', 'robins'];

// Tiring way to join arrays 🦆
birds.push('ducks') 
birds.push('swans')
birds.push('sea gulls')

// Simple way to join arrays 🦆
const sameArrWay1  = [...birds, 'ducks', 'swans', 'sea gulls']      //Push Way
const sameArrWay2  = ['ducks', ...birds, 'swans', 'sea gulls', ]    // Shift Way

console.log(sameArrWay1); // [ 'sparrows', 'finches', 'robins', 'ducks', 'swans', 'sea gulls' ]
console.log(sameArrWay2)  // [ 'ducks', 'sparrows', 'finches', 'robins', 'swans', 'sea gulls' ]

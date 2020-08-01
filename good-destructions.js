/**
 * sometimes a good destruction saves unforeseen unwanted
 */


const dog = {
    name: 'Rilley 🐶',
    legs: 4,
    type: 'pug',
    meal: 7,
}

//Bad destruc
function feed(animal) {
    return `Feed ${animal.name} , the ${animal.type} with ${animal.meal} kilos`;
}


//Good destruc
function feed({ name, meal, type }) {
    return `Feed ${name} , the ${type} with ${meal} kilos`;
}

// OR

function feed(animal) {
    const { name, meal, type } = animal;
    return `Feed ${name} , the ${type} with ${meal} kilos`;
}



console.log(feed(dog))
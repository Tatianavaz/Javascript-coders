/**
 * building better dynamic strings
 */

const horse = {
    name: 'BoJack Horseman 🐴',
    age: 28,
    skills: ['celebrity', 'drunk'],
    size: 'large',
}

// Bad String 
let whoIsBoJack = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')

// Good String
const { name, size, skills } = horse;
whoIsBoJack = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(whoIsBoJack);

// Better than that String is impossible
function horseAge(str, age) {
    const ageStr = age > 25 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const didUKnowBoJack = horseAge`This horse is ${horse.age}`;
console.log(didUKnowBoJack)
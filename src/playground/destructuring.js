// Object Destructuring

// const person = {
//     age: 25,
//     location: {
//         city: 'CasaBlanca',
//         temp: 88
//     }
// };


// const { name: firstname = 'Anonymous', age  } = person;
// console.log(firstname);
// console.log(age);


// const { city, temp: temperature } = person.location;
// console.log(city)
// console.log(temperature)
// console.log(person);


// Array destructuring

const address = ['Bd la Cornich 72 Rue La Mére Rouge', 'Casablanca', 'Ain Diab Anfa', '20100'];
const [street, city, state, zip] = address;

console.log(`You Are in ${address[1]} ${address[2]}`);
console.log(`You Are in ${city} ${state}`)

const address2 = ['Bd la Cornich 72 Rue La Mére Rouge', 'Casablanca', 'Ain Diab Anfa', '20100'];
const [, , state2 = 'New York', zip2] = address2;

console.log(`You Are in ${state2} ${zip2}`)
// Welcome Message
console.log("Hi. Welcome to BooleanTrains");

// Initialize variables
let inp;
let total_km;
let passenger_age;

let total_cost; 
const minor_discount = 0.2; 
const minor_age = 18;
const elder_discount = 0.4;
const elder_age = 65;

const current_year = 2022;

while (isNaN(passenger_age)) {
    inp = prompt("Please enter your date of birth or age");
    passenger_age = parseInt(inp);
}

if (passenger_age > 200) {
    passenger_age = current_year - passenger_age;
}

console.log("Passenger age is: ", passenger_age)

while (isNaN(total_km)) {
    inp = prompt("Please, input the distance you'd like to travel (in km)");
    total_km = parseInt(inp);
}

console.log(
    `
    Total travel distance is ${total_km}
    `
)

total_cost = 0.21 * total_km; 
if (passenger_age < minor_age) {
    total_cost *= (1 - minor_discount);
}
else if (passenger_age > elder_age) {
    total_cost *= (1 - elder_discount);
}

alert(
    `
    The cost of the ticket is ${total_cost} 
    `
)




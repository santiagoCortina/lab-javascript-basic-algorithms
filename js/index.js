// Iteration 1: Names and Input
hacker1 = "Santiago";
console.log("The drivers name is: ", hacker1);

hacker2 = "Kikis";
console.log("The navigators name is: ", hacker2);

// Iteration 2: Conditionals
hacker1.length > hacker2.length
  ? console.log("El nombre del piloto es mayor")
  : console.log("El nombre del navegador es mayor");

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  x += `${hacker1[i].toUpperCase()} `;
}
console.log(x);

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(hacker1));

hacker1 > hacker2
  ? console.log("El piloto va primero")
  : console.log("El navegador va primero");

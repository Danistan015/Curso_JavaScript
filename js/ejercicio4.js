let x1 = parseFloat(prompt("Ingresa la x1: "));
let x2 = parseFloat(prompt("Ingresa la x2: "));
let y1 = parseFloat(prompt("Ingresa la y1: "));
let y2 = parseFloat(prompt("Ingresa la y2: "));
let z1 = parseFloat(prompt("Ingresa la z1: "));
let z2 = parseFloat(prompt("Ingresa la z2: "));

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
console.log(distancia);

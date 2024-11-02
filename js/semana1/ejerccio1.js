
let x1=parseInt(prompt("Ingrese la coordenada x1: "));   /*Calcular la distancia entre esas coordenadas*/
let x2=parseInt(prompt("Ingrese la coordenada x2: "));
let y1=parseInt(prompt("Ingrese la coordenada y1: "));
let y2=parseInt(prompt("Ingrese la coordenada y2: "));
let coordenadas= Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))

console.log(coordenadas)
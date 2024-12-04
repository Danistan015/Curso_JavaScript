/*Programe un algoritmo que dado un número del 1 al 7, donde 1 referencia a lunes, 2 a martes y así sucesivamente
devuelva el día al que pertenece a dicho número. Realice la respectiva prueba de escritorio*/

let dia = parseInt(prompt("Ingrese el número de los días"))
let resultado
switch(dia){
    case 1: resultado = "Lunes";
    case 2: resultado = "Martes";
    case 3: resultado = "Miércoles";
    case 4: resultado = "Jueves";
    case 5: resultado = "Viernes";
    case 6: resultado = "Sábado";
    case 7: resultado = "Domingo";
}

console.log(resultado)
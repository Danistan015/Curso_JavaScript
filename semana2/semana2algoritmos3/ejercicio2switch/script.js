/*En una empresa de desarrollo de software se realizan un aumento salarial
para el nuevo año según la categoría del empleado. Programe un algoritmo
que determine el salario que debe recibir una persona el próximo año según
su categoría. Tenga en cuenta lo siguiente:
● La categoría 1 tendrá un aumento salarial del 15%.
● La categoría 2 tendrá un aumento salarial del 25%.
● La categoría 3 tendrá un aumento salarial del 45%.*/

const SALARIO = 1300000;
let categoria = parseInt(prompt("Ingrese la categoría del empleado"));
let resultadoSalario;
switch(categoria){
    case 1: 
        resultadoSalario = SALARIO + (SALARIO *0.15);
        break;
    case 2: 
        resultadoSalario = SALARIO + (SALARIO *0.25);
        break;
    case 3: 
        resultadoSalario = SALARIO + (SALARIO *0.45);
        break;
}


console.log("El aumento de salario es: " + resultadoSalario);
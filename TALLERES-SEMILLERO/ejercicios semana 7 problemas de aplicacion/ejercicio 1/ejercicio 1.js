//Escribe una función sumar que reciba dos números y un callback. El callback debe ser ejecutado con el resultado de la suma.


function sumar(numero1,numero2,callback){

    console.log("sumando numeros: ",numero1,numero2);
    const resultado= numero1+numero2;
    callback(resultado);
}
function mostrarResultado(resultado) {
    console.log("El resultado es:", resultado);
  }

sumar(5,5, mostrarResultado);
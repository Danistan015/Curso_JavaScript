    /*Programe un algoritmo que sume los números pares del 1 al 700.*/

    let suma = 0;
    for (let index = 1; index < 701; index++) {
        if(index%2 == 0){
            suma += index
        }
    }

    console.log("La suma es: " + suma)
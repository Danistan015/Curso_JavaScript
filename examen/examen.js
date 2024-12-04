//21
let letraMenu=prompt('Ingrese la letra que desea hacer:  \n "s" para sumar \n  "r" para restar \n "m" para multiplicar \n "d" para dividir \n  "c" para realizar una cuenta regresiva de n hasta 0 (n debe ser ingresado por el usuario)\n "p" para verificar si es divisible por 2 y 3 \n "x" para salir');

switch(letraMenu){
    case "s":
        let sum1=parseInt(prompt("Ingrese el primer numero a sumar: "));
        let sum2=parseInt(prompt("Ingrese el segundo numero a suamr"));
        let total=suma(sum1,sum2);
        console.log(total)
        break
    case "r":
        let rest1=parseInt(prompt("Ingrese el primer numero a restar"));
        let rest2=parseInt(prompt("Ingrese el segundo numero a restar"));
        let totalR=resta(rest1,rest2);
        console.log(totalR)
        break
    case "m":
        let mul1=parseInt(prompt("Ingrese el primer numero a multipliar"));
        let mul2=parseInt(prompt("Ingrese el segundo numero a multiplicar"));
        let totalM=multiplicar(mul1,mul2);
        console.log(totalM)
        break
    case "d":
        let div1=parseInt(prompt("Ingrese el primer numero a dividr"));
        let div2=parseInt(prompt("Ingrese el segundo numero a dividir"));
        let totalD=dividir(div1,div2);
        console.log(totalD)
        break
    case "c":
        let numRegresivo=parseInt(prompt("Ingrese el numero par ala cuenta regresiva"));
        let totalRegresivo=numeroRegresvio(numRegresivo);
        break
    case "p":
        let verificarD= parseInt(prompt("Ingrese el umero que queire revisar para vr si es divisible por 2 y 3"))
        
}
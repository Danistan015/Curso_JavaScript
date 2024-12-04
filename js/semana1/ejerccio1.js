
let x1=parseInt(prompt("Ingrese la coordenada x1: "));   /*Calcular la distancia entre esas coordenadas*/
let x2=parseInt(prompt("Ingrese la coordenada x2: "));
let y1=parseInt(prompt("Ingrese la coordenada y1: "));
let y2=parseInt(prompt("Ingrese la coordenada y2: "));
let coordenadas= Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))

console.log(coordenadas)
function tablaMultiplicar(){
    const tabla=10;
    const naturales=5;


    for (let i=1; i<=naturales;i++){
        for(let j =1;j<=tabla;j++){
            console.log(i + 'x' + j + '=' + (i*j));
        }

        console.log('')
    }



}
tablaMultiplicar(); 
function miFuncion(cadena){
    const longitud=cadena.lenght;
    let tabla= [];

    for (let i=0;i<longitud;i++){
        let fila = '';
        for(let j=0;j<longitud;j++){
            fila += cadena[i]+cadena[j]+ '';
        }
        tabla.push(fila.trim());
    }

    for (let i=0;i<tabla.length;i++){
        console.log(tabla[i]);
    }
}

miFuncion("xyz")
let cadena ="xyz"
let tabla=""
for (let i=0;i<cadena.length;i++){
    let fila=""
    for(let j=0;j<cadena.length;j++){
        fila+=cadena[i]+(cadena[j])+""
    }
    tabla+=fila+"\n"

}
console.log(tabla)
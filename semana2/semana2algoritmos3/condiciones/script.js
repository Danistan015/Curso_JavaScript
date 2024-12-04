/*Programe un algoritmo que diga si un estudiante ganó una asignatura según
su calificación. Para ganar la asignatura se necesita de una calificación mayor
o igual a 3.0.*/

let materiaAsignatura = parseFloat(prompt("Ingrese la nota de la asignatura"))
if(materiaAsignatura >= 3.0){
    console.log("Usted pasó la materia")
}else {
    console.log("Usted no pasó la materia")
}
function promedio() {
    let sumanotas = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5);
    promedio = sumanotas / 5;    
    promedio = Math.ceil(promedio);    
}

let nota1 = prompt("ingresa la primera nota",0);
let nota2 = prompt("ingresa la segunda nota",0);
let nota3 = prompt("ingresa la tercera nota",0);
let nota4 = prompt("ingresa la cuarta nota",0);
let nota5 = prompt("ingresa la quinta nota",0);

promedio()

if (promedio >= 70) {
    estado ="aprobado"
} else {
    estado ="reprobado"
}

console.log ("El promedio es " + promedio + ". El Alumno está " + estado +".");
alert  ("El promedio es " + promedio + ". El Alumno está " + estado +".");

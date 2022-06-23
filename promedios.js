/* a través de la variable sumaNotas la función promedio toma las cinco variables 
creadas con los inputs y los transforma en números enteros.
luego ejecuta la operación matematica para obtener el promedio. y finalmente
transforma el resultado decimal a numero entero aproximando hacia arriba con el método Math.ceil */

function promedio() {
    let sumaNotas = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5);
    promedio = sumaNotas / 5;    
    promedio = Math.ceil(promedio);    
}

/* creamos un código que pide a través de un prompt las cinco notas al usuario, 
luego las transforma en las varibles nota1, nota2, nota3 */

let nota1 = prompt("ingresa la primera nota",0);
let nota2 = prompt("ingresa la segunda nota",0);
let nota3 = prompt("ingresa la tercera nota",0);
let nota4 = prompt("ingresa la cuarta nota",0);
let nota5 = prompt("ingresa la quinta nota",0);

// llamamos a la función promedio

promedio()

/* establecemos la condición que si el número obtenido 
es mayor o igual a 70 la varible "estado" tendra el valor string
"aprobado", si no, tendra el valor "reprobado" */

if (promedio >= 70) {
    estado ="aprobado"
} else {
    estado ="reprobado"
}

/* finalmente el usuario obtiene, 
tanto en consola como en alerta, el promedio final y el estado del alumno */

console.log ("El promedio es " + promedio + ". El Alumno está " + estado +".");
alert  ("El promedio es " + promedio + ". El Alumno está " + estado +".");

//variables
var miVariable = "jhon";
console.log(miVariable);
let mi_variable = 12;
const mi_constante = 12;
mi_variable = 12;
let bool = true;
/*console.log(mi_variable + 2);
console.log(mi_variable / 2);
console.log(mi_variable * 2); */
var incremento = mi_variable--;
//console.log(incremento);
//estructuras ciclicas
for (let i = 0; i < 10; i++) {
  // console.log(mi_constante);
}
// condicionales
/*
if (bool !== true || (incremento !== 2 && incremento > 20)) {
  console.log("verdadero");
} else {
  console.log("falso");
} */

//estructuras de datos
let carros = ["chevrolet", "volvo", "mazda"];
console.log(carros[1]);
carros.push("BMW");
carros.pop();
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}
let bandera = true;
let contador = 0;

/*
while (contador < carros.length) {
  console.log(carros[contador]);
  contador++;
} */

//funciones
myFuntion(2, 3);
function myFuntion(num1, num2) {
  let suma = num2 + num1;
  //console.log(suma);
  //alert(suma);
  return suma;
}
let num2 = 2;
let num1 = 3;
/*
let suma = myFuntion2(num1, num2);
{
  return num1 + num2;
}*/

let suma = (num1, num2) => {
  return num1 + num2;
};
console.log(suma);

// clases objetos
const persona = {
  nombre: "jhon",
  edad: 23,
  apellido: "mendez",
  correo: "jmendezl@gmail.com",
};

console.log(persona.nombre);
console.log(persona["apellido"]);

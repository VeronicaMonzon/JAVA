/* console.log("---------Repaso--------");
if(5==4){
    console.log("5 es mayor")
}
let a=5;
let b=8.500;
if (a>b){
    console.log("a es mayor")
}else if (a===b){
    console.log("son iguales")
}else{
    console.log("b es mayor")
}
 // switch

 let color="azul";

 switch (color){
     case "rojo":
         console.log("El color es rojo");
         break;
     case "verde":  
        console.log("El color es verde");
         break;
     case "Azul":  
         console.log("El color es azul");
          break;  
     default:
         console.log("No encontre ningun color asi")        
 }

 //while

 let indice = 1; 
while(indice<=10) {
	console.log(indice)
	indice++;
}
// for
for(indice = 8; indice<=15; indice++) {
	console.log(indice)
}*/

console.log("--------Funciones------------");

function miPrimeraFuncion(num1, num2) {
  // funcion declarativa
  return num1 * num2;
}

function funcionSinParametros() {
  // funcion anonima
  return 5 * 8;
}

let multiplicacion = miPrimeraFuncion(2, 3); // guardar la funcion en una variable

let funcionExpresiva = function () {
  let a = "podemos definir variables dentro de las funciones";
  console.log(a);
};
funcionExpresiva();

function misDatos(nombre, apelliddo, edad) {
  return " Me llamo " + nombre + " " + apelliddo + " y tengo " + edad + " años";
}
console.log(misDatos("Aylen", "Romero", 21));

let valor = 150;
let dolarPesos = function (dolar) {
  return dolar * valor;
};
console.log(dolarPesos(1));

console.log("-------Scope----------");

let otraFuncion = function () {
  let x = "hola";
  var y = 1;
  if (true) {
    let x = "chau";
    var y = 50000;
    console.log(`let x vale ${x}`);
    console.log(`var y vale ${y}`);
  }
  console.log(`let x vale ${x}`);
  console.log(`var y vale ${y}`);
};
otraFuncion();

console.log("--------- Callback --------")

function saludar(callback) {
	callback() // ejectamos la función pero NO la creamos, solo estamos llamando a algo que todavía no existe como si existiera
}

saludar(function() { // acá va a existir la función callback
console.log("hola!");
}); // solo estamos definiendo la función NO la estamos ejecutando
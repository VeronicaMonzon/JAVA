// esto es un comentario
/* esto tambien
 es un comentario parrafo
 */
// ejemplos de nombres de variables validos

let usuarios;
let Prueba;
let _apellido;
let $edad;
let camelCase;
let snake_case;
let PascalCase;

console.log("-----var, let y const------")
//var
var miNombre;
miNombre="Aylen";

//let
let miEdad=21;
miEdad=50;
// let miEdad=60; no funciona
console.log("tengo " + miEdad + " años");

// const
const usuario1="Pepe";
//las constantes siempre se tienen que inicializar y no se pueden reasignar valor
//usuario1="Jose";

let variableGlobal; // variable global

function Ejemplo(){
    let variableLocal;
    /*
    ambito de mi variable local
    */

}

console.log("----tipos de datos-----")

//string

let str="String con comillas dobles";
let str2='String con comillas simples';
let str3=`String con acento agudo`;
let str4=`${str} y ${str2}`;

// number

let num=123;
let num1=10.2;
let num2=-80;
let num3=
console.log("no es un numero" * 2); // NaN -> NOt a Number

let num4= num*num2;
let num5= num3/num4;
let num6= num + num1;
let num7=num3-num4;

//boolean

let soyVerdadero=true;
let soyFalso=false;
let soyMayor=4>1;
console.log(soyMayor);

// null
let valorAdefinir=null;
valorAdefinir=50;

//undefined

let sinDefinir;

//alert("Hola"); // pasamos un contenido y muestra un mensaje;
//prompt("Como te llamas"); //pide datos al usuario

//alert("Hola " + prompt("Como te llamas?"));
//let username=prompt("¿Como te llamas?");

//alert("Hola " + username);

console.log("Hola, Mindo!"); // muetsra mensajes en la consola
console.error("Este es un mensaje de error");
console.warn("Este es un mensaje de advertencia");
console.info("Este es un mensaje de informacion");
//console.clear();

document.write("<h1> Introduccion a JavaScript </h1>"); //escribir cosas en nuestro html
//objeto.funcion();

console.log("----Funciones string-----");
// string.length

let cantidad="asdfgh";
console.log(cantidad.length);

// string.repeat(n)

let repetir="bla "
let repetir7=repetir.repeat(7)
console.log(repetir7);

// string.replace(str1,str2)(valor que busca, valor que reemplaza)

let hola="hola";
console.log(hola);
console.log(hola.replace("hola","chau"))

// tablas
console.table({ Nombre : "Norfi", Apellido : "Carrodeguas" });


var name=Number("");
console.log(name);
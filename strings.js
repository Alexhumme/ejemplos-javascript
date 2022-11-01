console.log("Strings");

let texto = "puta Cinco palabras uno dos 8 tres cinco";


// startsWith devuelve true si el String empieza con el valo añadido en el parametro
console.log(texto.startsWith("Hola")); // true

let prueba = texto.startsWith("puta ") ;

console.log(prueba ? "es una mala palabra":"siga escribiendo");
console.log(texto.endsWith("cinco") ? "termina con 'cinco'":"no termina en cinco");
console.log(texto.indexOf("x"));
console.log(texto.includes("8"));
console.log(texto.indexOf("n",15));


// Funciones
// HACER UNA FUNCION QUE SUME 10 +10

function sumar1(){ //Mi solucion
    return 10+10 
} 
function sumar2(){ //Solucion del profe
    let resultado = 10+10;
    console.log(resultado);
} 

console.log(sumar1());
sumar2();

// FUNCION QUE RESTE DOS NUMEROS CON PARAMETROS

function resta_numeros(a, b ,x = false){
    let c = a-b-x;
    return c;
}
console.log(resta_numeros(8, 2));

// Funciones flecha

const saludar  = (nombre = "Alex", apellido = false) => {
    let saludo = "Hola "+nombre;
    apellido ? saludo += apellido : true;
    console.log(saludo);
    return saludo;
}

saludar()+" wayaba"
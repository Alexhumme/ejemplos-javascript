console.log("*********fuciones***************")
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

const saludar  = (nombre = "Alex", segNombre = "",apellido = "") => {
    let saludo = "Hola "+nombre+" - "+segNombre+" - "+apellido;
    !apellido ? saludo += ". Esta persona no tiene apellido" : true;
    console.log(saludo);
    return saludo;
}

saludar("Juan", apellido="jose");

/*++++++++++++++++ */

function funcion_que_devuelve_5_nombres_y_saluda_si_empiezan_por_ma(nombres){
    for (let e of nombres){ 
        console.log(`${e}  ${(e.startsWith("MA")) ? "hola!" : "" }`) 
    }
}

funcion_que_devuelve_5_nombres_y_saluda_si_empiezan_por_ma(["JUAN","PEDRO","MARIA","DAVID","MARTA","MARCO","IAN"]);

/*version del profe*/

function funcion_que_devuelve_5_nombres_y_saluda_si_empiezan_por_ma_versio_del_profe(nombres){
    nombres.forEach(nombre => {
        console.log("nombre : "+nombre);
        (nombre.startsWith("MA")) ? "hola!" : "" 
        console.log("tu nombre empieza por MA" + nombre)
    });
}

funcion_que_devuelve_5_nombres_y_saluda_si_empiezan_por_ma_versio_del_profe(["JUAN","PEDRO","MARIA","DAVID","MARTA","MARCO","IAN"]);

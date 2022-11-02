/* 

ASINCRONIA

cuando hablamos de codigo asincronico nos referimos a un codigo
en el que las distintas instrucciones se ejecutan de manera
simultanea y sin seguir n orden especifico

*/

console.log("********** ASINCRONIA **********");

console.log("Cargando Banner...");
console.log("Cargando Textos...");
let tareaAsincronica = () => {
    let promesa = new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log("Mensajes Cargados Asincronicamente");
            resolve();
        }, 5000)
    })
    return promesa
}

tareaAsincronica();
console.log("Cargando footer");
/* 
EJEMPLO DE COMO SE PUEDE UTILIZAR LA TERMINAL DE VISUAL STUDIO
PARA EJECUTAR ARCHIVOS JAVASCRIPT USANDO EL COMANDO node Y ENTRANDO
AL ARCHIVO EN CUESTION CON cd
*/

//FileSystem de JavaScript === Scanner de Java


const fs = require("fs");

// obtener el texto de un archivo

const primerTxt = fs.readFileSync("./archivos/texto1.txt","utf-8");
console.log(primerTxt);

// cambiar texto de un archivo

let contenido = "cuando solo tenia 14 de edad, suspadres crearon un extrañoportal. diseñado para ver lo que nadie puede ver y asi alos fantasmas de alli vencer cuan esta no funciono sus padres desstireo pero el quiso ver y ahi entro de repente para dani todo cambio, su adn, SEALTERO!"
fs.writeFileSync("./archivos/texto2.txt",contenido);

// creamos una promesa que devuelve texto en un archivo

let contenido3 = "soy el tercer texto";
function getText(pathFile) {
    return new Promise( (resolve,reject)=>{
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}
getText("./archivos/texto2.txt").then((result)=>{
        console.log(result);
})
.catch((error)=>{
    console.log(error);
})

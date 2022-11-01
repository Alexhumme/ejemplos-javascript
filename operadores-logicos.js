console.log("*************operadoes logicos*************");

let x = 250, z=3200, life = 100, war = false;

console.log(
    "\nDiamantes : "+x+
    "\nDinero : "+z+
    "\nVida : "+life+
    "\nGerra : "+(war?"Activada" : "Desactivada")
);

console.log(
    `
    Diamantes : ${x}
    Dinero :    ${z}
    Vida :   ${life}
    Guerra :  ${(war?"Activada" : "Desactivada")}
    `
);
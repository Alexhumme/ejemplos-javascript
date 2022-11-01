console.log("***********erda primo jajaja*************")

// SCOPE

var a = 100;
console.log("1. por fuera equivalgo a: " + a);

function ambito(){
    console.log("2. sigo valiendio: "+a);

    var a = 80

    console.log("3. Ahora valgo: "+a)
}

console.log(ambito());

console.log("4. y por ultimo: "+a);

// Usandi let

let b = 100;
console.log("1. por fuera equivalgo a: " + b);

function ambito2(){
    console.log("2. sigo valiendio: "+b);

    let b = 80

    console.log("3. Ahora valgo: "+b)
}

try{console.log(ambito2());}catch(e){
    console.log("jajaja no funciono XD")
};

console.log("4. y por ultimo: "+b);

// ciclo for clasico reducido

let i = 0;

for (; i < 10;) {
    console.log("esto se repite");
    i++;
}

let abc = 0;

while(abc){
    console.log(true)
}



let nombres = ['jose','juan','Maria','Valvez'];
let apellidos = ['jose','juan','Maria','Valvez'];

console.log(nombres);

// OMG EL CICLO FOR EACH 😯 este modifica el array

nombres.forEach((valor)=>{
    console.log(valor);
})

console.log(nombres);
console.log("*********");

// OMG EL MAP 😯 este copia el array

apellidos.map((valor)=>{
    console.log(valor);
})

console.log(apellidos);
console.log("*********");

// 
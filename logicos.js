console.log("+++++++++++OPERADORES LOGICOS++++++++");
console.log("**********")

const data = {balas: 1};


// OR || devuelve a sies verdadero
// NULLIS ?? devuelve a si es indefinifo o nulo

console.log(data.balas || "Sin balas");//devuelve sin balas si balas es falso, devuelve balas si hay osea si es verdadero

console.log(data.balas ?? "Sin balas");//devuelve sin balas si balas es nulo o indefinido, devuelve balas si hay osea si es verdadero

console.log(data.balas && "sin balas");//devuelve sin balas si valas es falso, devuelve balas si hay osea si es verdadero

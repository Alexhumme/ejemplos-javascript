let columna = [], fila = [];

let cols = 7, rows = 7;

let x = 0, y = 0;

fx = 4; fy = 4;

fs = 0;

for (let i = 0; i<= cols; i++){
    fila = [];
    for (let o = 0; o<= cols; o++){
        fila.push("🟦");
        columna.push(fila)
    }
dir = 5;
}
/*
setInterval(()=>{
    columna[y][x] = "🟡";
    for (let i = 0; i<= cols; i++){
        console.log(" ");
        for (let o = 0; o<= cols; o++){
        console.log(columna[i][o],end="");
        }
    }
    console.log("\n \n"+
    "w. arriba\n"+
    "s. abajo\n"+
    "a. izquierda\n"+
    "d. derecha\n"+
    "0.salir"
    );
    console.clear();
},3000)
*/

columna[y][x] = "🟡";
for (let i = 0; i<= cols; i++){
    console.log(" ");
    for (let o = 0; o<= cols; o++){
    console.log(columna[i][o],end="");
    }
}
console.log("\n \n"+
"w. arriba\n"+
"s. abajo\n"+
"a. izquierda\n"+
"d. derecha\n"+
"0.salir"
);

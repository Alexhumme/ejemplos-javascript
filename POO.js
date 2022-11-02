console.log("**********PROGRAMACION ORIENTADA A OBJETOS************")

// OBJETO

const celular = {
    encendido: true,
    color: "cobalto",
    modelo: "A03",
    marca: "samsung",
    tamanio: {
        w : 600,
        h : 700,
    },
    precio: 450000,
    apagar : ()=>{ celular.encendido ? console.log("apagando...")  : console.log("telefono ya apagado"); celular.encendido = false;},
    encender : ()=>{ !celular.encendido ? console.log("encendiendo...") : console.log("telefono ya encendido"); celular.encendido = true;},
    llamar : (num)=>{ celular.encendido ? console.log("llamando a "+num+"...") : console.log("telefono apagado") },
    especificaciones : ()=>{ celular.encendido ? console.log("especificaciones: ",celular) : console.log("telefono apagado") },
}

celular.especificaciones();
celular.apagar();
celular.llamar(3152041450);
celular.encender();
celular.llamar(3152041450);

// Herencia
console.log("************************************")

class Persona {
    // Dentro de la clase vansus propiedades y metodos
    constructor(nombre,apellido = " ",edad,ocupacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
    saludar(){
        console.log("hola a todos! soy "+this.nombre+" "+this.apellido+"\ny soy "+this.ocupacion+"!");
    }
    data(){
        console.log(
            `
    Nombre : ${this.nombre}
    Apellido : ${this.apellido}
    Edad: ${this.edad}
    Ocupacion : ${this.ocupacion}
            `
        )
    }
    familia(){
        console.log(`*** La familia  ${this.apellido}: ***`);
        Personas.forEach(person =>{
            person.apellido == this.apellido ? console.log(person.nombre,this.apellido):false;
        })
    }
}

let p1 = new Persona("Elver","Galarga",69,"plomero");
let p2  = new Persona("Latan","Galarga",22,"cafetera");
let p3  = new Persona("Querri","Cachon",43,"conductor");
let p4  = new Persona("Elpin","Galarga",55,"bartender");
let Personas = [p1,p2,p3,p4];

p1.saludar();
p1.data();
p1.familia();


// ¡¡¡COMO HEREDAR DE UNA CLASE A OTRA!!!
// decimos que profesor es una extencion de la calse Persona
class Profesor extends Persona{
    constructor(nombre,apellido = " ",edad,color,area){
        super(nombre,apellido,edad);
        this.ocupacion = "profesor";
        this.color = color;
        this.area = area;
    }
    dataProf(){
        console.log(
            `
    Nombre : ${this.nombre}
    Apellido : ${this.apellido}
    Edad : ${this.edad}
    Color : ${this.color}
    Area : ${this.area}
            `
        )
    }
}

let liliana = new Profesor("liliana","socarraz",34,"cafe con leche","programacion de software");

liliana.data();
liliana.dataProf();
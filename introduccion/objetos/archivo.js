


const perosna= {
    nombre: "Juan",
    edad: 23,
    correo: "correo@correo.com",
    subcripciones: {
        wep: true,
        correo: true,
    }, 
    colores_favoritos: ["negro", "rojo"],
    saludo: function(){
        alert("hola mundo")
    }
}

console.log(perosna.nombre);//llamamos a un elemento puntual del objeto
console.log(perosna["edad"]);//otra forma de acceder a un elemento puntual del objeto
const varibale = "correo"//otra forma de acceder, declarando un varible con el nombre al que queremos acceder del objeto
console.log(perosna["correo"])//luego se llama esa varible que declaramos anteriomente
console.log(perosna.subcripciones.correo)//accedemos a un elemento del objeto que tenga adentro otros objetos y queramos acceder a uno de ellos 
perosna.pais = "Colombia"//agreagmos al objeto alguna otra propiedad que queramos
perosna.pais = "España"//sobre escribimos el pais 
console.log(perosna.pais)
//perosna.saludo()//asi vamos a poder llamar el metodo de la funcion


const empresa ={
    nombre: "golazo",
    Empleados: 9,
    Productos_cantidad: {
        aguas: 20,
        sporade: 30,
        bebdias: {
            hit: 20,
            cifrut: 20
        },
        gaseosas: {
            coca_cola: 20,
            Colombiana: 10
        },
    },
    precio_canchas: {
        Futbol_5: 70,
        Futbol_10: 140
    },
    saludar: function(){
        alert("hola, Bienvenido al golazo")
    }
}
console.log("esta empresa se llama: " + empresa.nombre);
console.log("la cantidad de empleados son: " + empresa["Empleados"]);
console.log("aguas:" + empresa.Productos_cantidad.aguas)
console.log("sporade " + empresa.Productos_cantidad.sporade)
empresa.saludar()
empresa.clientes = 40
console.log("la cantidad de clientes el dia de hoy fueron de " + empresa.clientes + " personas")



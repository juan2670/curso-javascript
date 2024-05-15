const usuario ={
    nombre: "juan",
    edad: 18,
    amigos: ["juan","maria","pedro"],
    /*Metodos propios, los creamos nosotros*/
    saludo: () =>{
        console.log("holaa");
    },
};

/*object.keys*/
const resultado = Object.keys(usuario);
console.log(resultado);

/*object.values*/
const valores = Object.values(usuario);
console.log(valores);

/*object entries*/
const resultado1 = Object.entries(usuario);
console.log(resultado1);
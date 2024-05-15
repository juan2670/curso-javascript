const frutas = ["manzana","pera","piña"];
const comidaFavorita = ["pizza","sushi", ...frutas];
//console.log(comidaFavorita);

const login ={
    correo: "jejenjuanjose@gmail.com",
    constraseña: 123,
}

const usuario = {
    ...login,
    nombre: "carlos",
    edad: 28
}

const registro = (nombre,correo, ...datosAdicionales) =>{
    //console.log(nombre,correo, datosAdicionales);
}
//registro("juan","jejenjuanjose@gmail.com", 28, "españa",)


const amigos = ["maria","pedro","cesar"];
const [primero,segundo,terceo] = amigos
//console.log(primero);

const persona = {
    nombre: "juan",
    edad: 18,
    pais: "mexico",
}

const {nombre,pais, edad} = persona
//console.log(nombre,pais,edad);

const dad = ({nombre, edad}) =>{
    console.log(`${nombre} tiene ${edad} años`);
}
dad(persona)
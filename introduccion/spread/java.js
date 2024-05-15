const frutas = ["manzana","pera","piña"];
const comidaFavorita = ["pizza","sushi", ...frutas];
console.log(comidaFavorita);

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
    console.log(nombre,correo, datosAdicionales);
}
registro("juan","jejenjuanjose@gmail.com", 28, "españa",)


º
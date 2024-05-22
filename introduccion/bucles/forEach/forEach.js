/*for in nos permite recorrer las propiedades de un objeto*/
const persona ={
    nombre: "carlos",
    edad: 27,
    correo: "jejenjuanjose@gmail.com",
};

/*For of nos permite recorrer los valores de un obejto iterable como:
arreglos,cadenas de texto,mapas, listas de nodos,etc...*/

const etiquetas = document.head.children;
[...etiquetas].forEach((elemento) =>{
    console.log(elemento)
})

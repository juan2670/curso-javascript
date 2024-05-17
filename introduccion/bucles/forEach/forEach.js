/*for in nos permite recorrer las propiedades de un objeto*/
const persona ={
    nombre: "carlos",
    edad: 27,
    correo: "jejenjuanjose@gmail.com",
};

for(i in persona){
    i[persona = ""]
}
console.log(persona);

/*For of nos permite recorrer los valores de un obejto iterable como:
arreglos,cadenas de texto,mapas, listas de nodos,etc...*/

let etiquetas = document.head.children;

for(elemento in etiquetas){
    console.log(elemento);
}


[...etiquetas].forEach((elemento) =>{
    console.log(elemento);
})

const contenedor1 =  document.getElementById("contenedor1")
//accedemos al ID de elemento
        //console.log(contenedor1);
//Accedemos a los elementos hijos 
        //console.log(contenedor1.children);
//Accedemos al cotenedor padre
        //console.log(contenedor1.parentElement)
//nos devuelve una coleccion de todas las eliquetas que le especifiquemos
const divs = document.getElementsByTagName("div");
        //console.log(divs);
//obtenemos los elementos en base a su clase
const clase = document.getElementsByClassName("contenedor")
        //console.log(clase)


const caja = document.querySelector("#contenedor1 .caja");
        //console.log(caja);

const cajas = document.querySelectorAll("#contenedor1 .caja");
        //console.log(cajas);

const UltimaCaja = document.querySelector("#contenedor2 .caja:last-child");
console.log(UltimaCaja);
console.log(UltimaCaja.closest("contenedor-principal"));
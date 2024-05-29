                    //OBTENIENDO ELEMENTOS//
//id//
const caja = document.getElementById("contenedor1");
//hijos//
console.log(caja.children);
//class//
let clase = console.log(document.getElementsByClassName("contenedor"));
//padre//
const padre = document.getElementById("contenedor1");
console.log(padre.children);
console.log(padre.parentElement);
//en base su nombre busca//
console.log(document.getElementsByTagName("div"));
////
console.log(document.querySelector("#contenedor1 .contenedor"))
////
console.log(document.querySelectorAll("#contenedor1 .contenedor"));
////
                //CREANDO ELEMENTOS//
const agregarCaja = () =>{
    //1//
    /*1.0*/const nuevoElemento = document.createElement("div");
    //2//
    /*2.0*/nuevoElemento.innerText = "hola Mundo";
    /*2.1*/nuevoElemento.setAttribute("id", "nuevo-id");
    /*2.2*/nuevoElemento.setAttribute("class", "caja activa");
    //3//
    /*3.0*/const divNuevo = document.getElementById("contenedor1");
    /*3.1*/divNuevo.insertAdjacentElement("afterbegin", nuevoElemento);
                    //REMPLAZAR//
    document.querySelector("#contenedor1 .caja").replaceWith(nuevoElemento);
}

                //ELIMIANDO ELEMENTO//
const Eliminar = () =>{
    //1.se define la ruta 
    const padre = document.getElementById("contenedor1");
    const hijo = document.querySelector(".caja");
    //2. se elimina
    if(hijo){
        padre.removeChild(hijo);
    };
};
            //Modificando estulos css//
    


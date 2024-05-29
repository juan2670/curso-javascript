/*
	📌 Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector("#contenedor1 .caja");

// classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () =>{
    primeraCaja.classList.add("activa")
}

// classList.remove() - Nos permite eliminar clases de un elemento
const eliminarClase = () =>{
    primeraCaja.classList.remove("activa")
}

// classList.toggle() - Nos permite alternar clases de un elemento
const toggleClase = () =>{
    primeraCaja.classList.toggle("activa");
}

// classList.contains() - Nos permite comprobar si el elemento contiene una clase
const comprobar = () =>{
    if(primeraCaja.classList.contains("activa")){
        console.log("la caja tiene la clase");
    }else{
        console.log("no tiene la clase")
    }

    console.log("y contiene las siguentes clases:")
    primeraCaja.classList.forEach((clase) =>{
        console.log(clase);
    });
}

//Agregando estilo a la clase
const primeraCaja1 = querySelector("#contenedor1 .caja"); 
const agregarElemento = () =>{
    primeraCaja1.classList.add("activa");
};
//Eliminando estilo a la clase
const eliminarCaja = () =>{
    primeraCaja1.classlist.remove("activa")
};
//toogle class
const toogle = () =>{
    primeraCaja1.classList.toggle("activa");
};
//comprobando clase
const comprobandoClase = () =>{
    if(primeraCaja1.classList.contains("activa")){
        console.log("la caja tiene la clase activa");
    }else{
        console.log("la caja no tiene la clase activa");
    };
};


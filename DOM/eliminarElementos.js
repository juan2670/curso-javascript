const Eliminar = () =>{
    const padre = document.getElementById("contenedor1");
    const hijo = padre.querySelector(".caja");
    if(hijo){
        padre.removeChild(hijo);
    };
};
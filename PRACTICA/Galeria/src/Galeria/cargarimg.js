const galeria = document.getElementById("galeria");
const cargarImg = (id,nombre,ruta,descripcion) =>{
    galeria.querySelector(".galeria__imagen").src = ruta;
};
export { cargarImg }; 
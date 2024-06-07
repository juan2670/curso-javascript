import dataFotos from "./datos/fotos";
import { cargarimg } from "./galeria/cargarimg";

const contenedorCategorias = document.getElementById("categorias");
const contenedorGaleria = document.getElementById("galeria");

contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")){
      contenedorGaleria.classList.add("galeria--active");
      document.body.style.overflow = "hidden";
      cargarimg();
    
      const categoriaActiva = e.target.dataset.categoria;
      const fotos = dataFotos.fotos[categoriaActiva];

      fotos.forEach((foto) => {
        const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img src="${foto.ruta}" alt="" />
                </a>
            `;
            contenedorGaleria.querySelector(".galeria__carousel-slides").innerHTML += slide; 
  });
  };
});





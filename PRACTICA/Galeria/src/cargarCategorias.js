import dataCategorias from "./datos/categorias";
const {categorias} = dataCategorias;
const contenedorCategorias = document.getElementById("categorias");

categorias.forEach((categoria) =>{
    //se crea el elemento
    const nuevaCategoria = document.createElement("a");
    //se agreaga el contenido
    const plantilla =`<a href="#" class="categoria" data-categoria="america">
    <img class="categoria__img" src="${categoria.portadaImg}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroDeFotos} Fotos</p>
    </div>
</a>`
    // Agregamos la clase, href, dataset y la plantilla a la nueva categoria.
    nuevaCategoria.classList.add("categoria");
    nuevaCategoria.href = "#";
    nuevaCategoria.dataset.categoria = categoria.id;
    nuevaCategoria.innerHTML = plantilla;
    //se agreaga al DOM
    contenedorCategorias.append(nuevaCategoria);
});     
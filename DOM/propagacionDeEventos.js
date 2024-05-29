const contenedor = document.getElementById("contenedor1");
contenedor.addEventListener("click",(e) =>{
    console.log("clik contenedor")
});
const caja = document.querySelector(".caja");
caja.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("clik en caja");
});

//1 EJ
const box = document.getElementById("contenedor1");
box.addEventListener("click", (e) =>{
    console.log("le diste clik al contenedor");
});

const cajas = document.querySelector(".caja");
cajas.addEventListener("clik", (e) =>{
    console.log("le diste clik a la caja");
    e.stopPropagation();
}); 
//2 EJ
const box2 = document.getElementById("contenedor2");
box2.addEventListener("click", (e) =>{
    console.log("selecionaste el contenedor 2");
});

const cajas2 = document.querySelectorAll(".caja");
cajas2.addEventListener("click", (e) =>{
    console.log("selecionaste la 2 caja");
    e.stopPropagation();
});
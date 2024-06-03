const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const primeraCaja = document.querySelector(".caja");
const toogleClas = () =>{
    primeraCaja.classList.toggle("activa");
}
//agregando
boton1.addEventListener("click", () =>{
    primeraCaja.addEventListener("click", toogleClas);
});
//eliminando
boton2.addEventListener("click",() =>{
    primeraCaja.removeEventListener("click", toogleClas);
});
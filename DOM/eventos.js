const boton1 = document.getElementById("boton1");
const caja = document.querySelector(".caja");
boton1.addEventListener("click",(e) =>{
    caja.classList.toggle("activa");
});

const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
	caja.addEventListener('click', (e) => {
		console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
	});
});

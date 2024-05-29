/*
	📌 Modificar estilos CSS mediante "inline styles".
*/
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
ultimaCaja.style.background = "#000";
ultimaCaja.style.color = "#fff";

const cajas = document.querySelectorAll(".caja");
let tamaño = 24;
const eliminar = () =>{
	cajas.forEach((caja) =>{
		caja.style.fontSize = `${tamaño - 1}px`;
		tamaño--;
	})
};
const agregar = () =>{
	cajas.forEach((caja) =>{
		caja.style.fontSize = `${tamaño + 1}px`;
		tamaño++
	})
};

const primeraCaja = document.querySelectorAll("#contenedor1 .caja:last_child");
let letra = 20;
const aumentar = () =>{
	primeraCaja.forEach((caja) =>{
		caja.style.fontSize = `${letra + 1}px`;
		letra++;
	});
};
const disminuir = () =>{
	primeraCaja.forEach((caja) =>{
		caja.style.fontsize = `${letra -1}px`;
		letra--;
	});
};

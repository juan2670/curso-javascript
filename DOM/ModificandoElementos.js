/* 📌 elemento.innerHTML
	Nos permite cambiar el contenido HTML de un elemento
*/
const PrimeraCaja = document.querySelector(".caja");
PrimeraCaja.innerHTML = "holaaaa"

/* 📌 elemento.attribute
	Nos permite acceder y cambiar atributos del elemento.
*/
PrimeraCaja.id = "id_xd"

/* 📌 elemento.setAttribute()
	Nos permite agregar o establecer el valor de un atributo del elemento
*/
//varibale.setAtribute("id","valor");
PrimeraCaja.setAttribute("id","nuevo_id");
PrimeraCaja.setAttribute("class", "nueva-clase");
PrimeraCaja.setAttribute("data-id", "123-23");

/* 📌 elemento.style
	Nos permite cambiar los estilos css de un elemento
*/

const contenedor2Caja1 = document.querySelector("#contenedor2 .caja");
contenedor2Caja1.style.backgraund = "#fff";
contenedor2Caja1.style.color = "#000";
contenedor2Caja1.style.textTranform = "upercase";
contenedor2Caja1.style.fontsize = "sans-serif";
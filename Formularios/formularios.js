/*
	📌 Formularios

	Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM
*/

//console.log(document.forms["formulario_donacion"]["correo"].value);
const correo = document.getElementById("correo");
console.log(correo);


document.getElementById("btnsend").addEventListener("click", (e) =>{
    e.preventDefault();
    const correo = document.getElementById("correo");
    console.log(correo.value);
    console.log(document.forms["formulario_donacion"]["pais"].value);
    const formulario = document.forms["formulario_donacion"];
    console.log(formulario["donacion"].value);
    console.log(formulario.fecha.value);
    console.log(formulario.terminos.checked);
});

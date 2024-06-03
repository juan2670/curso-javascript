/*
	📌 Expresiones Regulares dentro de formularios
	Podemos usar expresiones regulares para validar los campos de una forma más precisa.

	Guía de expresiones regulares:
	https://www.youtube.com/watch?v=wfogZfIS03U

	Ejemplo:
	https://regexr.com/71ua4
*/
const formulario = document.getElementById('formulario_donacion');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
	const datos = {
		correo: formulario.correo.value,
		pais: formulario.pais.value,
		donacion: formulario.donacion.value,
		fecha: formulario.fecha.value,
		terminos: formulario['terminos'].checked,
	};

	// Comprobamos correo
	if (!expresionRegular.test(datos.correo)){
		console.log('Correo invalido');
		return;
	};
	console.log('Enviando datos...');
});
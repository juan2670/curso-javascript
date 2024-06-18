//Definidmos la ruta de contenedor padre PRODUCTO.
const producto = document.getElementById('producto');
//Definimos la clases de la IMG.
const productoImagen = producto.querySelector('.producto__imagen');
//Definimos la ruta del hijo del contenedor PRODUCTO.
const thumbs = producto.querySelector('.producto__thumbs');
//
const propiedadColor = producto.querySelector("#propiedad-color");
//
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');




thumbs.addEventListener('click', (e) => {
	if (e.target.tagName === "IMG") {
		//obtenemos la ruta del src completa. 
		const img = e.target.src;
		
		// Obtenemos la posicion del ultimo /.
		const lasIndex = img.lastIndexOf('/');

		// Cortamos la cadena de texto para obtener solamente una parte.
		const NombreImg = img.substring(lasIndex + 1);

		//Cambiamos la ruta de las IMG.
		productoImagen.src = `./img/tennis/${NombreImg}`;    
	};
});


//
propiedadColor.addEventListener("click", (e)=>{
	if(e.target.tagName === "INPUT"){
		productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
	}
});


//
	btnIncrementarCantidad.addEventListener("click", (e)=>{
		inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

	btnDisminuirCantidad.addEventListener("click",(e)=>{
		if(parseInt(inputCantidad.value) > 1 ){
			inputCantidad.value = parseInt(inputCantidad.value) - 1;
		};
});

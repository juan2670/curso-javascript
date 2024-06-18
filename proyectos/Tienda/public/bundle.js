'use strict';

//Definidmos la ruta de contenedor padre PRODUCTO.
const producto$1 = document.getElementById('producto');
//Definimos la clases de la IMG.
const productoImagen = producto$1.querySelector('.producto__imagen');
//Definimos la ruta del hijo del contenedor PRODUCTO.
const thumbs = producto$1.querySelector('.producto__thumbs');
//
const propiedadColor = producto$1.querySelector("#propiedad-color");
//
const btnIncrementarCantidad = producto$1.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');




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
	}});


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
		}});

var data = {
    productos: [
        {
            id: "1",
            nombre: "Tennis Converse Standard",
            descripcion: "Lorem ipsum dolor sit amet.",
            precio: 109.00,
            colores: ["negro","rojo","amarillo"],
            tamaños: ["1,5","2","2.5","3","4"],
        },
    ],
};

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById("agregar-al-carrito");
const producto = document.getElementById("producto");
let carrito = [];
const formatearMoneda = new Intl.NumberFormat("es", { style: 'currency', currency: 'COP' });
const notificacion = document.getElementById("notificacion");


const renderCarrito = ()=>{
    ventanaCarrito.classList.add("carrito--active");
	// Eliminamos todos los productos anteriores para construir el carrito desde cero.
	const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito__body .carrito__producto');
	let total = 0;
	if (productosAnteriores) {
		productosAnteriores.forEach((producto) => producto.remove());
	}	//comprobando si hay productos
	if(carrito.length < 1){
		//ponemos la clase del carrito vacio
		ventanaCarrito.classList.add("carrito--vacio");
	}else {
		//eliminamos la clase del carrtio vacio
		ventanaCarrito.classList.remove("carrito--vacio");
		// Iteramos sobre cada producto del carrito y lo mostramos
		carrito.forEach((productoCarrito)=>{
			// Iteramos sobre la lista de productos.
			data.productos.forEach((productoBaseDatos) => {
				// Obtenemos el precio del archivo de producto.js
				// Cuando el id del item del carrito sea el mismo que alguno de la lista.
				if (productoCarrito.id === productoBaseDatos.id) {
					// Tomamos el precio y creamos una nueva propiedad en el objeto del item.
					productoCarrito.precio = productoBaseDatos.precio;
					total += productoBaseDatos.precio * productoCarrito.cantidad;
				}			});
	
			// Establecemos la ruta de la imagen que vamos a querer mostrar.
			let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;
			if(productoCarrito.color === "rojo"){
				thumbSrc = './img/thumbs/rojo.jpg';
			}else if(productoCarrito.color === "amarillo"){
				thumbSrc = './img/thumbs/amarillo.jpg';
			}	
			// Creamos una plantilla del codigo HTML.
			const plantillaItem = `
			<div class="carrito__producto-info">
							<img src="${thumbSrc}" alt="" class="carrito__thumb" />
							<div>
								<p class="carrito__producto-nombre">
									<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
								</p>
	
								<p class="carrito__producto-propiedades">Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${
					productoCarrito.color
				}</span></p>
							</div>
						</div>
						<div class="carrito__producto-contenedor-precio">
							<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
									/>
								</svg>
							</button>
							<p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}</p>
						</div>
							`;
			// Creamos un div
			const itemCarrito = document.createElement("div");
	
			// Le agregamos la clase de carrito__producto.
			itemCarrito.classList.add('carrito__producto');
	
			// Le insertamos la plantilla dentro del elemento.
			itemCarrito.innerHTML = plantillaItem;      
	
			// Agregamos el producto a la ventana del carrito.
			ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
	
		});
	}	ventanaCarrito.querySelector(".carrito__total").innerText = formatearMoneda.format(total);

};
// Abrir carrito
botonesAbrirCarrito.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        renderCarrito();
    });

});

// Cerrar carrito
botonesCerrarCarrito.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        ventanaCarrito.classList.remove("carrito--active");
    });
});

// Agregar al carrito
btnAgregarCarrito.addEventListener("click",(e)=>{
    const id = producto.dataset.productoId;
	const nombre = producto.querySelector('.producto__nombre').innerText;
	const cantidad = parseInt(producto.querySelector('#cantidad').value);
	const color = producto.querySelector('#propiedad-color input:checked').value;
	const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;
	if(carrito.length > 0){
		let productoEnCarrito = false;
		carrito.forEach((item =>{
			if(item.id === id && item.nombre === nombre && item.color === color && item.tamaño === tamaño){
				item.cantidad += cantidad;
				productoEnCarrito = true;
			}		}));
		if(!productoEnCarrito){
			carrito.push({
				id: id,
				nombre: nombre,
				cantidad: cantidad,
				color: color,
				tamaño: tamaño,
			});
		}	}else {
		carrito.push({
			id: id,
			nombre: nombre,
			cantidad: cantidad,
			color: color,
			tamaño: tamaño,
		});
	}	//estbalecemos la ruta de la img de la notificacion
	let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;
	if(color === "rojo"){
		thumbSrc = "./img/thumbs/rojo.jpg";
	}else if(color === "amarillo"){
		thumbSrc = "./img/thumbs/amarillo.jpg";
	}	notificacion.querySelector("img").src = thumbSrc;
	//mostramos la notificacion
	notificacion.classList.add("notificacion--active");
	//despues de 5 segundos se oculta
	setTimeout(()=>{
		notificacion.classList.remove("notificacion--active");
	},3000);

});
// Botones eliminar del carrito
ventanaCarrito.addEventListener("click", (e)=>{
	if(e.target.closest("button").dataset.accion === "eliminar-item-carrito"){
		const producto = e.target.closest(".carrito__producto");
		const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);

		carrito = carrito.filter((item, index) => {
			if (index !== indexProducto) {
				return item;
			}
		});
		renderCarrito();
	}
});

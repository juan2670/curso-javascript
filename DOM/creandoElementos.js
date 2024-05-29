const agregarCaja = () =>{
    /*
		📌 1. Creamos el elemento
		createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
	*/
    const nuevaCaja = document.createElement("div");
    /*
		📌 2. Agregamos texto y atributos
	*/
    nuevaCaja.innerText = "nueva caja";
    nuevaCaja.setAttribute("id", "nuevo-id");
    nuevaCaja.setAttribute("class", "caja activa");
    /*
		📌 3. Agregamos el elemento al DOM
	*/
    const contenedor = document.getElementById("contenedor1");
    	// .appendChild() - Agrega un elemento al final
    //contenedor.appendChild(nuevaCaja);
    
	/* .insertAdjacentElement() - Nos permite agregar un elemento 
	Valores:
		afterbegin - como primer elemento
		beforebegin - antes del elemento padre
		beforeend - como ultimo elemento
		afterend -  despues del elemento padre
	*/
    //contenedor.insertAdjacentElement("afterbegin", nuevaCaja);

    	// .replaceWith() - Nos permite remplazar el elemento por otro
    document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja);
};

//Agregando nuevo elemento
const creandoElementos = () =>{
//1 caja
	elementcont1 = document.createElement("div");
	nuevaCaja.innerText = "creando nuevo elemento";
	nuevaCaja.setAttribute("id", "box");
	nuevaCaja.setAttribute("class", "caja activa");
	const cont1 = document.getElementById("contenedor1");
	cont1.insertAdjacentElement("afterbegin",nuevaCaja);
	//replace
	document.querySelector("#contenedor1, .caja").replaceWith(elementcont1);
//2 caja 
	elementCont2 = document.createElement("div");
	elementCont2.setAttribute("id", "box_2");
	elementoCont2.setAttribute("class","text_2");
	const cont2 = document.getElementById("contenedor2");
	cont2.insertAdjacentElement("beforebegin",elementCont2);
	//replace
	document.querySelector("contenedor2, .caja").replaceWith(elementoCont2);
//3 caja
	elementoCont3 = document.createElement("h2");
	elementoCont3.setAttribute("id","box_3");
	elementoCont3.setAttribute("class", "text_3");
	const cont3 = document.getElementById("contenedor3");
	//replace
	cont3.insertAdjacentElement("afterend",elementoCont3);
//remplazando
	document.querySelector("#contenedor1, .caja").replaceWith(elementoCont3);
};
//elimiando elementos contenedor del DOM
const elimiandoElementos = () =>{
	const cont1 = document.getElementById("contenedor1");
	const children = cont1.querySelector(".caja");
	if(children){
		cont1.removeChild(children);
	};
	//contenedor 2
	const cont2 = document.getElementById("contenedor2");
	const children_1 = cont2.querySelector(".caja");
	if(children_1){
		cont2.removeChild(children_1);
	};
	//contenedor 3
	const cont3 = document.getElementById("contendor3");
	const children_2 = cont3.querySelector(".caja");
	if(children_2){
		cont3.removeChild(children_2);
	};

};


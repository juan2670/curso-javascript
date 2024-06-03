/*
	📌 JSON
	Javascript Object Notation
*/

/*
	📌 Tipos de datos que podemos usar en JSON:
	- cadena de texto
	- numeros
	- objetos (en formato JSON)
	- arreglos
	- booleanos
	- null

	Tipos de datos que NO podemos usar en JSON:
    - funciones
    - objetos de fecha
    - undefined
*/

// datos.json
const datos = `
{
    "id": 1,
    "nombre": "carlos",
    "suscriptor": true,
    "post": [
        {
            "id": 1,
            "titulo": "titulo del primer post",
            "texto": "teto del primer post..."
        },
        {
            "id": 2,
            "titulo": "titulo del 2 post",
            "texto": "teto del 2 post..."
        }
    ]
}
`;

/*
	📌 parse()
	Le pasamos una cadena de texto con formato JSON y nos devuelve objeto de javascript.
*/
const objeto = JSON.parse(datos);
/*
	📌 stringify()
	Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto con objeto en formato JSON
*/
const usuario ={
    nombre: "carlos",
    correo: "correo@gmail.com",
    colores: ["verde","azul", "morado"],
};
console.log(JSON.stringify(usuario));

/*crea un array simple y muestralo en la consola*/
console.log("Crear un simple Array");
const numeros = [23,344,23,455];
console.log(numeros);

/*crea un array donde guardes los nombres de tus amigos y luego utiliza algun
metodo para poder contrar la cantidad de amigos*/
console.log("Contar la cantidad de elementos que estan en el Array");
const amigos = ["juan", "pedro", "samuel", "maria", "jose"];
console.log(`en tu Array tienes ${amigos.length} amigos`);

/*Crea un array de letras o numeros y muestralo en el documento HTML, 
pero mediante un metodo, conviertelos en STR*/
console.log("Un Array convertido una cadena STR y se muestra en el documento HTML");
const listaDeAmigos = ["juan","pedro","maria","karol","luna"];
document.body.innerHTML = listaDeAmigos.toString();

/*Ahora a la lista anteior sepra a cada nombre para que esten seprados*/
console.log("Hacer una sepracion de los elementos");
document.body.innerHTML = (listaDeAmigos.join("  -"));

/*Ahora crea un Array y muestralo en consola de forma ordenada*/
console.log("dos Arrays ordenados")
const numerosOrdenados = [1,4,6,2,3,5];
const LetrasOrdenadas = ["A","B","F","C","D","E"];
console.log(numerosOrdenados.sort());
console.log(LetrasOrdenadas.sort());

/*Ahora de las dos listas anteriores, unelas creando una sola*/
console.log("dos Array unidos en uno solo:")
const UnSoloArray = (numerosOrdenados.concat(LetrasOrdenadas));
console.log(UnSoloArray);

/*Ahora de alguna de las dos listas anteriores muestralas en consola de fomra desordenada*/
console.log("mostrar los Array de forma desordenada");
const arrayDesordenado = (numerosOrdenados.reverse());
console.log(arrayDesordenado);

/*crea una Array en el cual no sabes la cantidad de posiciones, pero
queremos que algun elemento este simpre al final*/
console.log("x elemento SIEMPRE estara al final")
const fila = ["juan", "pedro", "jose"];
fila.push("LUNITAAAAAAAA");
console.log(fila);

/*Ahora para grega un elemento al princpio*/
console.log("x elemento SIEMPRE estara al princpio")
fila.unshift("LUPITAAAAAAAAA");
console.log(fila);

/*Ahora vamos a eliminar el ultimo elemento*/
console.log("eliminar el ultimo elemento");
fila.pop();
console.log(fila);

/*Ahora elimina el primer elemento*/
console.log("vamos a liminar el primer elemento");
const valorReturn = fila.shift();
console.log(fila);
/*ahora retorna el valor elimiando*/
console.log("vamos a dalrle rturn al primero elemento eliminado");
console.log(valorReturn);

/*crea una lista de amigos y elimina los 3 ultimos y remplazalos con algun metodo*/
const amigos1 = ["pedro", "juan", "maria", "jose"];
amigos1.splice(1,3,"remplazado 1", "remplazado 2");
console.log(amigos1)

/*crea una lista de furtas y copia las futras que mas te gustan*/
const Frutas = ["pedra", "mora", "uva","melocoton","papaya"];
console.log(Frutas.slice(1,3));




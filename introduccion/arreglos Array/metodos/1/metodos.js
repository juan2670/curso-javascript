let arreglo = ["verde", "rojo", "azul",]

/*la propiedad length, nos ayuda a constar la cantid de elementos*/
console.log(arreglo.length)

/*el metodo toString nos permite transformar el arreglo a una cadena de texto*/
document.body.innerHTML = arreglo.toString();

/*el metodo join nos va a permitir tranformar el arreglo a una cadena de texto y 
podemos seprar cada elemento por x simbolo*/
console.log (arreglo.join("-"));

/*el sort me va a permitir ordenas el arreglo de forma alfabetica*/
const letras = ["a","d","b","c","g","e"];
console.log(letras.sort());

/*El metodo revers hace todo lo contario que sort es decir va ordenar
de forma decendente*/
const numeros = [1,2,3,4,5,6]
console.log(numeros.reverse())

/*el metodo de concat nos va permitir juntar dos arreglos o mas en uno solo*/
const arreglo1 = [1,2,3,4,5,6];
const arreglo2 = ["a","b","c","d"];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3)


/*el metodo push no va a permitir poner x elemento al final de arreglo*/
const nombres = ["pedro", "juan", "maria"];
nombres.push("JUANNNNNNN"),
console.log(nombres);

/*El metodo pop nos va a permitir eliminar el ultimo elemento*/
nombres.pop();
console.log(nombres);

/*Para eliminar el primer elemento tenemos el meotodo shift*/
nombres.shift();
console.log(nombres);

/*para poder agregar un elemento al pirncipip usamos el metodo*/
nombres.unshift("lunes");
console.log(nombres);

/*Ahora para poder remplazar algun elemento de Array usamos el metodo Splaice
tambien en vez de eliminar podemos agregarlos*/
const amigos = ["juan", "pedro", "luna", "maria"];
console.log("ANTES DE ELIMINAR Y REEMPLAZAR");
console.log(amigos);
console.log("DESPUES DE REEMPLZAR LOS VALORES");
amigos.splice(1, 3, "lunita", "lupita", "max");
console.log(amigos);

/*Para poder copiar elementos usamos el metodo slice*/
const Frutas = ["mango", "pera", "melocoton", "uva", "manzana"];
console.log(Frutas.slice(1,4));







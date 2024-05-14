/*El scope block o las varibles de tipo bloque, nos dicen que las varibles que sean definidas con let o const dentro de un bloque.
Un bloque seria { llaves }, solo podemos acceder dentro de ellas dentro del bloque y afuera NOOOOOO.*/

const edad = 18;
if(edad >= 18){
    const accesoPermitido = true;
    console.log(accesoPermitido);
    if(true){
        console.log(accesoPermitido);
    }
};
let accesoPermitido = "si";
console.log(accesoPermitido);


if(true){
    var cosas = "si"
}
console.log(cosas)
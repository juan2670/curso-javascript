/*el indexOF nos ayuda a saber cual es el index o saber cual es la posicion de
x elemento, en el caso que no llegue a encontrsr ninguna posicion nos va a
retornar -1*/
//EJ:
const Nombres = ["pedro", "carlos", "maria", "jose", "luis", "mauricio"];
console.log(Nombres.indexOf("luis"));

/*El metodo forEach funciona a partir de una funcion en la cual podremos
recorrer nuestro Array*/
Nombres.forEach((nombre,index) => {
    console.log(`Hola ${nombre} (${index})`);
});

/*El metodo find trabaja a partir de una funcion y nos va a ayudar a recorrer todo 
el Array y podremos darle return al primer elemento que queramos*/

const Valor = Nombres.find((nombre) =>{/*creamos una variable constante en la cual
le asignamos el Array con el metodo find y a este metodo le damos como argumento
una funcion de tipo flecha con el parametro de nombre*/

    if(nombre[0] === "j"){/*Luego le decimos que recorra todo el Array
    y mire las primeras letras, hasta que se encuentro con la (j)*/
        return nombre;/*Luego que encuentre la letra j, retorne ese nombre 
        y lo guarde en la varible definda*/
    }
})
console.log(Valor);//Luego le decimos que nos muestre el valor,retornado

const mayusculas = Nombres.map((nombre) =>{
    return nombre.toUpperCase();
})
console.log(mayusculas);

const letras = Nombres.filter((nombre) =>{
    if(nombre.length == 4){
        return nombre;
    }
}) 
console.log(letras);

/*includes nos devolver afalse o true si encentra el eleento que estamos buscando*/
console.log(Nombres.includes("jose"));

/*every va a ejecutar alguna condicion por cada uno d elos elementos y si todos los elementos cumplen 
la condicion nos va a devolver true*/
const type = Nombres.every((nombre) =>{
    if(typeof nombre == "string"){
        return true;
    }else{
        return false;
    }
});
console.log(type);
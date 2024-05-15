const nombres = ["juan","maria","pedro","jose",];
const bucle = nombres.forEach((nombre) =>{
    return nombre;
})
console.log(bucle);


/*
1 parametro: desde donde empieza 
2 parametro: desde donde termina
3 parametro: secuencia de incremento del bucle
*/


const valor = prompt("desde que numeros queres que inicie la secuencia");
for(let numero = 0; numero<=valor; numero++){
    console.log(numero);
}
/*sentencia BREAK*/
for(let numero = 0; numero<=2; numero++){
    console.log(numero);
}

for(let i = 0; i <= nombres.length; i++){
    if(nombres[i][0] !== "a"){
        break;
    }
    console.log(nombres[i]);
}










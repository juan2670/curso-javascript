const valor1 = prompt("ingrese el primer valor");
const valor2 = prompt("ingrese el segundo valor");
const resultado = valor1 - valor2;
if(resultado >= 0 ){
    console.log("es mayor a 0");
    let imparpar = resultado % 2;
    if(imparpar == 0){
        console.log("es par")
    }
    else{
        console.log("es impar");
    }
}else{
    console.log("es menor a 0");
}
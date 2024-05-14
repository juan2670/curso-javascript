const saludo = (nombre = "amigo") => {
    console.log(`hola ${nombre}`);
};

const operacion = (tipo ,num1, num2) => {
    if(tipo === "suma"){
        console.log(num1 + num2);
    }else if(tipo === "resta"){
        console.log(num1 - num2);
    }
};
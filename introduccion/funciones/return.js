const operacion = (tipo, num1, num2) => {
    if(tipo === "suma"){
        return num1 + num2;
    }else if(tipo === "resta"){
        return num1 - num2;
    }
};

const varible = operacion("suma",200,900);
console.log(varible);



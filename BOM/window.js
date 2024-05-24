//WINDOW.OPEN() PARA CREAR UNA NUEVA VENTANA
//1 PARAMETRO: direccion de la nueva ventana
//2 PARAMETRO: Nombre de la nueva ventana
//3 PARAMETRO: Opciones adicionales par ala ventana
let ventana;
const abrirVentana = () =>{
    ventana = window.open("","nueva ventana","width=500, heigth=500");
    ventana.document.write("<h1>holaaa desde la nueva ventana</h1>");
}
//WINDOW.CLOSE() Para poder cerrar la ventana
const cerrarventana = () =>{
    ventana.close();
}

//FUNCION CONFIM PARA CONFIRMAR ALGO
const AccesoPermitido = () =>{
    const Permiso = confirm("eres mayor de edad");
    if(Permiso){
        alert("bienvenido eres mayor de edad");
    }else{
        alert("No eres mayor de edad, lo siento");
    }
};

//FUNCION setTimeOut(() =>{}, 2000);
//Saludando depsues de 5 segundos
const saludo = () =>{
    console.log("hola,saludo");
}
//id del setTimeOut()   
let id;
const saludar = () => {
    console.log("iniciando tiempo");
     id = setTimeout(saludo,5000);
}

//Limpiar o cancelar el saludo con clearTimeOut(id)
const Parar = () => {
    console.log("parando tiempo");
    clearTimeout(id);
};
//creando una cuenta infinita hasta que nosotros le especifiquemos con el funcion setInterval()

//iniciando la cuenta
let cuenta = 0
let id_2;
const iniciarCuenta = () =>{
    id_2 = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
};
//parando la cuenta
const pararCuenta = () =>{
    console.log("paramos la cuenta");
    clearInterval(id_2)
}


//COOKIES
const Cookie = () =>{
    document.cookie = "nombre; expires=1 jan 2025 01:00:00 UTC";
};
//agregando las cookies
const iniciarSesion = () =>{
    const usuario = prompt("usario:")
    document.cookie = `nombre= ${usuario}; expires=1 jan 2025 01:00:00 UTC`;
    alert("sesion iniciada");
};
console.log(document.cookie);
//elimiando las cookies
const cerrarSesion = () =>{
    document.cookie = `nombre=; expires=1 jan 2020 01:00:00 UTC`
    console.log("adiosss")
}
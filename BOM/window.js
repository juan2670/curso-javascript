let ventana;
const abrirVentana = () =>{
    ventana = window.open("","nueva ventana","width=500, heigth=500");
    ventana.document.write("<h1>holaaa desde la nueva ventana</h1>");
}
const cerrarventana = () =>{
    ventana.close();
}


const AccesoPermitido = () =>{
    const Permiso = confirm("eres mayor de edad");
    if(Permiso){
        alert("bienvenido eres mayor de edad");
    }else{
        alert("No eres mayor de edad, lo siento");
    }
};

const saludo = () =>{
    console.log("hola,saludo");
}   
let id;
const saludar = () => {
    console.log("iniciando tiempo");
     id = setTimeout(saludo,5000);
}

const Parar = () => {
    console.log("parando tiempo");
    clearTimeout(id);
}
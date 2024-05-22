const promesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        const exito = true;
        if(exito){
            resolve("la oepracion tuvo exito");
        }else{
            reject("La operacion no tivo exito")
        }
    },4000)
});
promesa.then((mensaje) =>{
    alert(mensaje);
})

promesa.catch((mensaje) =>{
    alert(mensaje);
})
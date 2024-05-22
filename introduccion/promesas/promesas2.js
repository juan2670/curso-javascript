/*EJ: si llego temprano a la empresa recibo un bono regalo, pero si llego tarde no recibo ningun bono de
regalo*/
const TiempoDeLlegada = (Hora) =>{
    return new Promise((resolve,reject) =>{
        if(Hora <= "09:00:00"){
            resolve("llegaste temprano, toma tu bono de regalo");
        }else{
            reject("llegaste tarde, NO tienes bono de regalo bro");
        }
    });
};

TiempoDeLlegada("09:00:00").then((respuesta) =>{
    alert(respuesta);
}).catch((error) =>{
    alert(error);
})

/*EJ: si pasas x materia con mas de 90 te compro un ihpone, pero si no la pasas con ese 
promedio no te doy el celular*/

const Promedio = (Calificacion)=>{
    return new Promise((resolve,reject)=>{
        if(Calificacion >= 90){
            resolve("Muy bien hijo, Toma tu Iphone")
        }else{
            reject("Lo siento hijo, pero no te puedo dar el celular");
        };
    });
};

Promedio(20).then((respuesta) =>{
    alert(respuesta);
}).catch((error) =>{
    alert(error)
})
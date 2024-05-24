
const TiempoDeLlegada = (Hora) =>{
    return new Promise((resolve,reject) =>{
        if(Hora <= "09:00:00"){
            resolve("llegaste temprano, toma tu bono de regalo");
        }else{
            reject("llegaste tarde, NO tienes bono de regalo bro");
        }
    });
};

const llamda = async() =>{
    try{
        const hora = await TiempoDeLlegada("09:00:00");
        console.log(hora)
    } catch(error){
        console.log(error)
    }
};X

const nombres = ["juan","maria","laura","lorena"];
const cosas = nombres.find((nombre)=>{
    if(nombre[0]== "m"){
        return nombre;
    }
});
console.log(cosas)

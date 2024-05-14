/*1*/
const letras = ["a","b","c","d","e","f","g","h"];
const numeros =[1,4,3,5,7,8,4,5,6];
const nombres = ["juan","pedro","maria","jose","orlando","mario"];

const xd = nombres.every((nombre)=>{
    if(typeof nombre == "string"){
        return true;
    }else{
        return false;
    }
});

console.log(xd);
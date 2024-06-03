document.getElementById("btn1").addEventListener("click", () =>{
    const nombre = prompt("escribe tu nombre");
    window.localStorage.setItem("usuario",nombre);
});
document.getElementById("bnt2").addEventListener("click", () =>{
    window.localStorage.removeItem("usuario");
});
console.log(window.localStorage.usuario);
if(window.localStorage.usuario){
    console.log("hola "+ window.localStorage.usuario);
}else{
    console.log("hola anonimo")
};

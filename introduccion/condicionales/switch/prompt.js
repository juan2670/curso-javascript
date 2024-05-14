const usuario ={
    nombre: "juan",
    pais: "x",
};


switch(usuario.pais){
    case "Mexico":
        console.log("el usuario es mexicano")
        break;
    case "España":
        console.log("el usuario es de españa")
        break;
    default:{
        console.log("el usuario de otro pais")
    }
};
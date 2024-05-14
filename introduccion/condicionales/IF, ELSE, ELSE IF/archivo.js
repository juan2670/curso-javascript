const usuario = {
    edad: 12,
    pais: "Argentina",
    Ticket: true,
};

//ejemplo numero #1
if(usuario.edad >= 18){
    //console.log("puedes entrar al concierto ")
}else{
    //console.log("no puedes entrar al concierto")
}

//ejemplo #2
if(usuario.edad >= 18 && usuario.Ticket==true){
    //console.log("puedes entrar al concierto")
}else{
    //console.log("no puedes entrar al concierto")
}

//ejemplo #3
if(usuario.edad >= 18){
    if(usuario.Ticket){
        //console.log("el usuario es mayor de edad y tiene ticket")
    }else{
        //console.log("el usuario es mayor de edad pero no tiene ticket")
    }
}else{
    //console.log("el usuario no es mayor de edad o no tiene ticket")
}


//ejemplo #4
if(usuario.pais == "Mexico"){
    console.log("El usuario es mexicano")
}else if(usuario.pais == "Colombia"){
    console.log("El usuario es de colombia")
}else if(usuario.pais == "España"){
    console.log("El usuario es de españa")
}else{
    console.log("El usuario es otro pais")
}
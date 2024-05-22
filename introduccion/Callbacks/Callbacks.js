//Los Callbacks son funciones que podmeos pasar como parametro a otra funcion
//con el fin de poder ejecutar una funcion a partir de otra funcion
const ObtenerPost = (usuario, Callbacks) =>{
    console.log(`obteniendo los post de ${usuario} ....`);
    setTimeout(() =>{
        let post = ["post_1","post_2","post_3",];  
        Callbacks(post);
    }, 2000);
} 
ObtenerPost("carlos",(post) =>{
    console.log(post);
});
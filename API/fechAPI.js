const endpoint = "https://api.npoint.io/de161617ecf52d09ace0";
//forma 2 de hacer peticiones
fetch(endpoint)
    .then((respuesta) =>{
        const promesa = respuesta.json();
        promesa
            .then((datos) =>{
                console.log(datos.nombre);
            })
            .catch((error) =>{
                console.log(error);
            })
    })
    .catch((error) =>{
        console.log(error);
});
//forma 1 de hacer peticiones
const obtenerDatos = async() =>{
    const respuesta = await fetch(endpoint);
    const datos = await respuesta.json();
    console.log(datos);
}
obtenerDatos();

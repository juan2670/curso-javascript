import data from "./fotos";
const {fotos} = data
export default{
    categorias: [
        {
            id: "america", nombre: "America", numeroFotos: fotos["america"].length, portadaImg: "./img/america.jpg",
            id: "europa", nombre: "Europa", numeroDeFotos: fotos["europa"].length, portadaImg: "./img/europa.jpg",
            id: "africa", nombre: "Africa", numeroDeFotos: fotos["africa"].length, portadaImg: "./img/africa",
            id: "asia", nombre: "Asia", numeroDeFotos: fotos["fotos"].length, portadaImg: "./img/asia",
            id: "oceania", nombre: "Oceania", numeroDeFotos: fotos["oceania"].length, portadaImg: "./img/oceania",
            id: antartida, nombre: "Antartida", numeroDeFotos: fotos["antartida"].length, portadaImg: "./img/antartida",
        },
    ],
}; 
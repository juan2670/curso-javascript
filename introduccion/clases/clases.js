class Usuarioooo {
    //Se crean los Atributos de la clase
    tipo = "usuario";
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        console.log(`${this._nombre} se caba de registrar`)
    }
    //Se crean los Metodos de la clase
    caminar(){
        return `${this._nombre} esta caminando`
    }
    correr(){
        return `${this._nombre} esta corriendo`
    }
}


//Se crean las instacias con sus Atributos de la clase
const juan = new Usuario("juan","jejen");
const pedro = new Usuario("pedro","peo");
const peo = new Usuario("peo","ws")
//se llaman los metodos para las instancias creadas de la clase
console.log(pedro.correr());
console.log(juan.caminar());



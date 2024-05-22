//Se crea la clase
class Peronsa{
    //Se crea el metodo constructor para los atributos
    constructor(Nombre,Edad){
        this._Nombre =Nombre;
        this._Edad = Edad;
    }
    //Se crean los Metodos de la clase para luego ser llamados
    MostrarSaludo(){
        return `${this._Nombre} esta saludando`;
    }
    MostrarEdad(){
        return `${this._Nombre} tiene ${this._Edad} años`;
    }
    static BorrarUsuario(id_Usuario){
        return `El usuario con el Id ${id_Usuario} ha sido eliminado`;
    }
    static CantidadUsuarios = 1000;  
}
// Se crea la instancia de la clase
let Peronsa_1 = new Peronsa("juan",22);
//Llamando metodos de la clase a la instancia
console.log(Peronsa_1)
console.log(Peronsa_1.MostrarSaludo());
console.log(Peronsa_1.MostrarEdad());
//console.log(Peronsa_1.BorrarUsuario(22));

//Mertodos Estticos:
//--Nos permiten acceder a los atributos y Metodos de la clase
//--Al metodos que queremos que sea estatico le agregamos la palbra reservada de static
//--Nos evitamos crear una instancia para llamar a un Metodo
console.log(Peronsa.BorrarUsuario(20));
console.log(`La cantidad de usuarios registrados en este mes son: ${Peronsa.CantidadUsuarios} registros`);




/*una variable es un espacio que se guarda en memoeria para luego usar esa
informacion que se guarda en la varible y utilizarla en otro momento,
como su nombre dice variable es decir que puede variar, es decir que 
en cualquer otro momento le podemos cambiar el valor a la varibale que
posteriormente ya habimos asignado EJ*/

let x = 0; //asigamos la variable x con el valor de 0
x = 10; //re asiganmos el valor x a 10

/*para decrlar una varibles usamos let,var,const, pero var ya no se utiliza, 
se utiliza let, let se implemento en las nuevas versiones por lo tanto
var ya queda obsoleta EJ.*/
let numero = 20.4; //forma nueva 
var Nombre = "juan"; //forma obsoleta
/*const es algo diferente a let, ya que const quere decir que la
varibale va ser constante es  decir no la podemos re asignar la variable*/
const Sexo = "Hombre";




                //TIPOS DE VARIABLES

//tipo de dato: String(STR)
let str="cadena de texto";

//Tipo ded dato: Num(NUMERO)
let num=20;

//Tipo de dato: Boolean(true,false)
let Boolean= true, False;


//Tipo de dato: array(arreglos).
let compras = ["carlos", 90, 90.9876, true, false, {numero: 92039340}]


//Tipo de dato: objetos.
let persona = {
    nombre: "carlos",
    edad: 20,
    automovil:{
        marca: "ford",
        Contadiad_de_ruedas: 4,  
    }
}
console.log(persona)

//Tipo de dato: Funciones.
function hola(){
    console.log("Hola")
}
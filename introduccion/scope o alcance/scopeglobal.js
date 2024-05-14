/*El scope global o varibles gobales, podemos accder a esas varibales desde cualquer lugar ya que declaramos la varible 
afuera por lo tanto no tiene restriccion a la hora de usar esa varible*/

var nombre = "juan";
const saludo = () => {
    console.log(`hola ${nombre}`)
    nombre = "Pedro"
    console.log(`el nuevo nombre es ${nombre}`)
};
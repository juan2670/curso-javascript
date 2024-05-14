/* El Scope local o varibles locales solo se pueden acceder si estas dentro d euna funcion y solo podemos acceder a esas varibles 
dentro de la misma funcion, si intetnamos accder a esa x varible a fuera de la fucnion no dara un error, ya que la varible que estamos
intetnado llamar la declaramos dentro de una funcion.
*/

const ObtenrNumeroLetras = (nombre) =>{
     let numero = nombre.length;
     console.log(`${nombre} tiene ${numero} letras`);

     const funcion = () =>{
          console.log(numero)
     }
     funcion()
};


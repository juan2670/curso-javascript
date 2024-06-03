const fecha = new Date();
//console.log(fecha);

const cumpleaños = new Date("2005-01-22T12:00:00");
//console.log(cumpleaños);

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toTimeString());

//mes
console.log(fecha.getMonth());
//dia
console.log(fecha.getDate());
//año
console.log(fecha.getFullYear());






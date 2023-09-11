alert("Bienvenido al restaurante. Esta es tu cuenta")



//Ingresar Datos
var cost1 = parseInt(prompt("Costo de la Entrada"));
var cost2 = parseInt(prompt("Costo del Segundo"));
var cost3 = parseInt(prompt("Costo del Postre"));


//Procesar Datos
var total = cost1 + cost2 + cost3;
var igv = (total*0.18) + total;



//Mostrar Datos
console.log("El costo de la Entrada es: " + cost1 );
console.log("El costo del Segundo es: " + cost2 );
console.log("El costo del Postre es: " + cost3 );
console.log("El costo total es: " + total);
console.log("El costo total con igv es: " + igv);
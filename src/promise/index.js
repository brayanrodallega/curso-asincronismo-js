// promesas -> tienen 3 estados: - pendiente (cuando se esta ejecutando) - completada (cuando regreso la info deseada) - rechazada.
// para construir una promesa usamos la palabra reservada Promise, nos regresa una función anónima con 2 funciones dentro (resolve, reject).
const promise = new Promise(function (resolve, reject) {
  //estructura básica de una promesa.
  resolve("todo bien");
});
// para el ej. con 10 vacas cumplimos con el suministro de leche necesario, con menos vacas dejamos de cumplirlo.
const cows = 15; // cantidad de vacas disponibles
const countCows = new Promise(function (resolve, reject) {
  // generamos una nueva promesa pasando la función anónima con resolve, reject.
  if (cows > 10) {
    // hacemos la comparación de la cantidad de vacas necesarias.
    resolve(
      `tenemos: ${cows} vacas necesarias para cumplir con la demanda de leche`
    ); // resolvemos ok si se cumple la condición anterior.
  } else {
    // si no se cumple lo anterior caemos en el rechazo de la promesa.
    reject("no podemos cumplir con la demanda de litros de leche"); // resultado a devolver si no se cumple la condición (if)
  }
});

// podemos anidar tantos .then como queramos!! En este ejemplo la promesa se va cumplir por lo que va resolver en resolve.
countCows
  .then((result) => {
    // .then es un método donde pasamos una función anónima o función flecha, donde capturamos el resolve.
    console.log(result); // mostramos en consola el resultado del resolve.
  })
  .catch((error) => {
    // .catch es un método donde pasamos una función anónima o func. flecha, donde capturamos el error (reject) rechazo.
    console.log(error); // mostramos en consola el error/rechazo de la promesa.
  })
  .finally(() => console.log("finally")); // .finally es un método donde indicamos que finalizó, por más que se haya cumplido o rechazado.

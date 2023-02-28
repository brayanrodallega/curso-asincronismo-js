const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

//funcion principal que obtendrá la informacion del producto como un objeto
function fetchData(urlApi, callback) {
    //inicializar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
    xhttp.open('GET', urlApi, true);
    //en este metodo Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
    xhttp.onreadystatechange = function (event) {
        //el atributo readyState define el estado del objeto XMLHttpRequest
        //0 No inicializado
        //1 Loading
        //2 ejecutado
        //3 interactuando
        //4 completado
        if (xhttp.readyState === 4) {
            //si la respuesta de la API es exitosa (200 Ok)
            if (xhttp.status === 200) {
                //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
                //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
                callback(null, JSON.parse(xhttp.responseText));
                //si la respuesta de la API no es exitosa se captura el error
            } else {
                //se inicializa un objeto de tipo Error donde se le envian como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error
                const error = new Error("Error" + urlApi);
                //se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo obtener el objeto
                return callback(error, null);
            }
        }
    //el método .send() envia la petición al servidor
  }
  xhttp.send();
}


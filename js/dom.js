window.onload = function() {

	//var info = document.getElementById("practica");
	// Numero de enlaces de la pagina
	var enlaces = document.getElementsByTagName("a");
  console.log("Numero de enlaces = "+ enlaces.length);

	// Direccion del penultimo enlace
	var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
  console.log(mensaje);
	// Numero de enlaces que apuntan a http://prueba
  var contador = 0;
  for(var i=0; i<enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  console.log( contador + " enlaces apuntan a http://prueba");

	// Numero de enlaces del tercer p�rrafo
	 var parrafos = document.getElementsByTagName("p");
   enlaces = parrafos[2].getElementsByTagName("a");
   console.log("Numero de enlaces del tercer párrafo: "+ enlaces.length);
 }
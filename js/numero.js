
var numero = prompt("Introduce Limite de Numeros a Imprimir");
		var cont=0;
		for(cont=1;cont<=numero;cont++){
			var resultado = parImpar(numero);
			alert("El número "+cont+" es "+resultado);
		}
		
		function parImpar(numero) {

			
			if(cont % 2 == 0) {

				return "par";
			}
			else {
				return "impar";
			}
		}
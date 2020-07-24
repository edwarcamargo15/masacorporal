var cantidad = prompt("Ingresa el valor a depositar");
var retiro=prompt("Ingresa el valor a retirar");
cuenta.depositar: function(cantidad);
cuenta.retirar: function(retiro);
cuenta.consultar: function();
var cuenta =
{

	titular:"Edwar Camargo",
	saldo:0,

	depositar: function(cantidad){
		console.log("hola" + cantidad);
		alert("Has Ingresado "+cantidad+" Dolares (US)  ")
		this.saldo += cantidad;
	},

	retirar: function(retiro){
		console.log("hola" + retiro);

		alert("Has Retirado "+ retiro+" Dolares (US)  ")
		this.saldo -= retiro;
	},

	consultar: function(){
		return "Nombre del Titular: " + this.titular + " Saldo de tú Cuenta: " + this.saldo;
	}
    
}
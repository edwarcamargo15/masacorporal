
var cuenta =
{
	cantidad = prompt("Ingresa el valor a depositar");
    retiro=prompt("Ingresa el valor a retirar");
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
console.log(cuenta.depositar: function(cantidad));
console.log(cuenta.retirar: function(retiro));
console.log(cuenta.consultar: function());




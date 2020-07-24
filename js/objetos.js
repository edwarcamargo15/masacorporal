var valor= prompt("Ingresa el valor a depositar");
var ret = prompt("Ingresa el valor a retirar");

var CuentaAhorro = 
        {
            
            titular: "Edwar Camargo ",
            saldo : 0,
            ingresar: function(cantidad)
            {
               
                
                 alert("Has Depositado: " + cantidad + " Dolares (US)");
                return this.saldo += cantidad;
            },

            extraer: function(retiro)
            {
              
                
                alert("Has retirado: " + retiro + " Dolares (US)");
                return this.saldo -= retiro;
            },

            informar: function(){
               
                alert("Nombre del Titular: " + this.titular +"\n"+ "Saldo Total: " + this.saldo + " Dolares (US)");
                /*return "Nombre del Titular: " + this.titular + "El Saldo de la Cuenta es \n" + this.saldo;*/
            },
            
        } 
        CuentaAhorro.ingresar(valor);
        CuentaAhorro.extraer(ret);
        CuentaAhorro.informar();











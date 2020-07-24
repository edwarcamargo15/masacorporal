
		/*var opc= prompt("Selecciona Opcion: \n" + "Prompt: Ingresa 1");
		var peso;
		var altura;

		if(opc==1){

			peso= prompt("Ingresa tu peso");
			altura= prompt("Ingresa tu Altura");
			console.log(" No INGRESE "+ peso + "-" + altura);
			calcularImc(peso,altura);
		}*/
		var peso= prompt("Ingresa tu peso");
		var altura= prompt("Ingresa tu Altura");

		calcularImc(peso,altura);

		function calcularImc(peso,altura){
        
        
 	   /* peso = document.getElementById("peso").value;
 	   altura = document.getElementById("altura").value;*/
       console.log(" Ingrese a "+ peso + " "+ altura);
 	   let imc= peso/(altura**2);
 	   let text="";
 	   console.log(" Ingrese a "+ imc);

 	   if (imc < 15) {
 	   	text = "Delgadez Muy severa";
 	   }
 	   else if(imc>15 && imc<15.9){
 	   	text = "Delgadez severa \n"+ "Indice Masa Corporal (IMC): " + imc;
 	   }
 	   else if(imc>16 && imc<18.4){
 	   	text = "Delgadez \n" + "Indice Masa Corporal (IMC): "+ imc;
 	   }
 	   else if(imc>18.5 && imc<24.9){
 	   	text = "Peso Saludable \n"+ "Indice Masa Corporal (IMC): " + imc;
 	   }
 	   else if(imc>25 && imc<29.9){
 	   	text = "Sobrepeso \n"+ "Indice Masa Corporal (IMC): "  + imc;
 	   }
 	   else if(imc>30 && imc<39.9){
 	   	text = "Obesidad severa \n"+ "Indice Masa Corporal (IMC): " + imc;
 	   }
 	   else if(imc>40){
 	   	text="Obesidad Morbida \n"+ "Indice Masa Corporal (IMC): "+ imc;
 	   }
 	   else{
 	   	text="Dato Invalido";
 	   }

 	   alert(text);
 	}
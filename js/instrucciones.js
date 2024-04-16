//Ejercicio 1
function ejercicio1 (){
var usua, matri, desc, total;
usua=prompt("Digite el nombre del usuario:");
matri=parseInt(prompt("Digite el valor de la matricula:"));
if (matri <= 1000000){
	alert("el valor de la matricula no puede ser inferior a 1000000");
	matri=parseInt(prompt("Digite el valor de la matricula:"));
}
desc=(matri*10/100);
total=matri-desc;
alert("El total a pagar es: " + total);
}

//Ejercicio 2
function ejercicio2 (){
var usua, matri, desc, total;
usua=prompt("Digite el nombre del usuario:");
matri=parseInt(prompt("Digite el valor de la matricula:"));
for (i=0; i<1;){
	if (matri >= 1000000) {
		i++;
	}
	else{
		alert("el valor de la matricula no debe ser mayor o igual a 1000000");
		matri=parseInt(prompt("Digite el valor de la matricula:"));
	}
}

desc=(matri*10/100);
total=matri-desc;
alert("El total a pagar es: " + total);


}

//Ejercicio 3
function ejercicio3 (){
var usua, matri, desc, total;
usua=prompt("Digite el nombre del usuario:");
matri=parseInt(prompt("Digite el valor de la matricula:"));
while(matri<1000000){
	alert("el valor de la matricula no debe ser mayor o igual a 1000000");
	matri=parseInt(prompt("Digite el valor de la matricula:"));
}
desc=(matri*10/100);
total=matri-desc;
alert("El total a pagar es: " + total);


}
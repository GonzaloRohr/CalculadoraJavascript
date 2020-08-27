
function n1(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n1").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n2(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n2").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n3(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n3").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n4(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n4").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n5(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n5").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n6(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n6").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n7(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n7").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n8(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n8").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n9(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n9").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado;
}

function n0(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("n0").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado ;
}
//operaciones aritmeticas
function op1(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("s").innerHTML;
	document.getElementById("resultado").innerHTML= actual +sumado + " ";

}

function op2(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("r").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado + " ";
}

function op3(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("d").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado + " ";
}
function op4(){

	var actual=document.getElementById("resultado").innerHTML;
	var sumado= document.getElementById("m").innerHTML;
	document.getElementById("resultado").innerHTML= actual + sumado + " ";
}

function mostrarResultado(){

	var actual=document.getElementById("resultado").innerHTML;

	var suma= actual.indexOf("+");
	var resta= actual.indexOf("-");
	var div= actual.indexOf("%");
	var mult= actual.indexOf("X");

	if(suma != -1){

		var arr= actual.split("+",2);

		var res= parseInt(arr[0])+parseInt(arr[1]);

		document.getElementById("resultado").innerHTML=res;
	}else if(resta != -1){

		var arr= actual.split("-",2);

		var res= arr[0]-arr[1];

		document.getElementById("resultado").innerHTML=res;
	}else if(div != -1){

		var arr= actual.split("%",2);

		var res= arr[0]/arr[1];

		document.getElementById("resultado").innerHTML=res;
	}else if(mult != -1){	

		var arr= actual.split("X",2);

		var res= arr[0]*arr[1];

		document.getElementById("resultado").innerHTML=res;
	 }
}

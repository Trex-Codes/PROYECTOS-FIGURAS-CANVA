// ------------------ CUBO BASE BASICA ------------------

// FIGURA
function ViewFigure3(){

	var canvas = document.getElementById('CanvSect3');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// // linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(220, 100);
ctx.lineTo(220, 85);
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.lineTo(75, 112);
ctx.lineTo(50, 100);
ctx.lineTo(50, 75); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(95, 35);
ctx.lineTo(75, 46); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

//  liena 90° vista frontal
ctx.beginPath();
ctx.moveTo(120, 45);
ctx.lineTo(102, 56);
ctx.stroke();
ctx.closePath();


// liena 90 izquierda 
ctx.beginPath();
ctx.moveTo(75, 112);
ctx.lineTo(75, 85);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea triangulo superior (1)
ctx.beginPath();
ctx.moveTo(75, 97);
ctx.lineTo(220, 85);
ctx.lineTo(120, 60);
ctx.stroke();
ctx.closePath();

// linea triangulo Inferior (2)
ctx.beginPath();
ctx.moveTo(75, 112);
ctx.lineTo(220, 100);
ctx.stroke();
ctx.closePath();

 // corte cuadro Vista (SUPERIOR)
 ctx.beginPath();
 ctx.moveTo(95, 35);
 ctx.lineTo(120, 45);
 ctx.lineTo(120, 75);
 ctx.lineTo(75, 96);
 ctx.stroke();
 ctx.closePath();

 // cuadrado bajado
 ctx.beginPath();
 ctx.moveTo(75, 46);
 ctx.lineTo(102, 56);
 ctx.lineTo(75, 85);
 ctx.lineTo(50, 75);
 ctx.lineTo(75, 46);
 ctx.stroke();
 ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup03(){

  var canvas = document.getElementById('CanvSect3');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION IZQUIERDA ---------- 

// cuadro izquierda inferior
ctx.beginPath();
ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
ctx.fillRect(25, 70, 50, 65);
ctx.strokeRect(25, 70, 50, 65);
ctx.closePath();

// Cuadro izquierda supeerior 
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.fillRect(25, 45, 50, 25);
ctx.strokeRect(25, 45, 50, 25);
ctx.closePath();

// Triangulo 
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.moveTo(40, 45);
ctx.lineTo(40, 15);
ctx.lineTo(275, 15);
ctx.lineTo(75, 135);
ctx.lineTo(75, 45);
ctx.stroke();
ctx.fill();
ctx.closePath();

}

// VISTA FRONTAL
function ViewVist_Front03(){

	var canvas = document.getElementById('CanvSect3');
	var ctx = canvas.getContext('2d');

  	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(76, 105, 200, 30);
	ctx.strokeRect(76, 105, 200, 30);
	ctx.closePath();

	// cuadro izquierdo inferior 
	ctx.beginPath();
	ctx.fillStyle = "pink";
	ctx.fillRect(25, 75, 50, 60);
	ctx.strokeRect(25, 75, 50, 60);
	ctx.closePath();

	// cuadro izquierdo superior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
	ctx.fillRect(25, 15, 50, 60);
	ctx.strokeRect(25, 15, 50, 60);
	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat03(){

	var canvas = document.getElementById('CanvSect3');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// cuadro inferior largo
	ctx.fillStyle = "lightblue";
	ctx.fillRect(25, 105, 250, 30);
	ctx.strokeRect(25, 105, 250, 30);
	ctx.closePath();

	// trapecio 
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.moveTo(25, 105);
	ctx.lineTo(25, 75);
	ctx.lineTo(125, 15);
	ctx.lineTo(225, 15);
	ctx.lineTo(225, 105);
	ctx.lineTo(25, 105);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}
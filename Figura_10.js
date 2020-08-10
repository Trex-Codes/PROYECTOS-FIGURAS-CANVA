// FIGURA
// function ViewFigure9(){

	var canvas = document.getElementById('CanvSect10');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.moveTo(150, 100);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
// ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(205, 65);
ctx.stroke();
ctx.closePath();

	// linea corte cuadro medio (SUPERIOR)
	ctx.beginPath();
	ctx.moveTo(150, 100);
	ctx.lineTo(165, 90);
	ctx.stroke();
	ctx.closePath();

	// Linea corte cuadro medio (INFERIOR)
	ctx.beginPath();
	ctx.moveTo(150, 145);
	ctx.lineTo(165, 135);
	ctx.stroke();
	ctx.closePath();

	// Linea corte cuadro medio (INFERIOR)
	ctx.beginPath();
	ctx.moveTo(220, 100);
	ctx.lineTo(205, 110);
	ctx.stroke();
	ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 60); // linea 90° izquierda
ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 55); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(120, 20);
ctx.lineTo(50, 60); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Linea 90 (1) derecha
ctx.beginPath();
ctx.moveTo(187, 105);
ctx.lineTo(175, 112);
ctx.lineTo(175, 65);
ctx.lineTo(187, 58);
ctx.lineTo(187, 105);
ctx.lineTo(205, 110);
ctx.lineTo(205, 65);
ctx.lineTo(187, 59);
ctx.stroke();
ctx.closePath();

// corte cuadro medio 
ctx.beginPath();
ctx.lineTo(175, 112);
ctx.lineTo(165, 109);
ctx.stroke();
ctx.closePath();

// linea 90 (2) izquierda
ctx.beginPath();
ctx.lineTo(165, 135);
ctx.lineTo(165, 90);
ctx.lineTo(96, 63);
ctx.stroke();
ctx.closePath();

// cuadro medio 
ctx.beginPath();
ctx.moveTo(175, 65);
ctx.lineTo(125, 47);
ctx.stroke();
ctx.closePath();

// linea corte horizontal
ctx.beginPath();
ctx.moveTo(96, 63);
ctx.lineTo(125, 47);
ctx.stroke();
ctx.closePath();






















// }
// ------------------ CUBO BASE BASICA ------------------

// FIGURA
// function ViewFigure2(){

	var canvas = document.getElementById('CanvSect4');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }


// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 130);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(198, 67); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 85); // Linea 90° izquierda
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
ctx.lineTo(98, 31); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(99, 60);
ctx.lineTo(50, 85); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(220, 85); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

	// --------------------------------------------

	// Linea 90° izquierda
	ctx.beginPath();
	ctx.moveTo(200, 113);
	ctx.lineTo(200, 67);
	ctx.lineTo(99, 31);
	ctx.lineTo(99, 60);
	ctx.lineTo(200, 98);
	ctx.stroke();
	ctx.closePath();

	// cuadros izquierdo 
	ctx.beginPath();
	ctx.moveTo(145, 28);
	ctx.lineTo(120, 40);
	ctx.lineTo(120, 68);
	ctx.lineTo(70, 94);
	ctx.stroke();
	ctx.closePath();

	// cuadros derecho
	ctx.beginPath();
	// ctx.moveTo(, Y);
	// ctx.lineTo(X, Y);
	ctx.stroke();
	ctx.closePath();
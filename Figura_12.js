// FIGURA
// function ViewFigure12(){

	var canvas = document.getElementById('CanvSect12');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
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
ctx.lineTo(200, 68); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 60); // linea 90° izquierda
ctx.lineTo(75, 70); // conectores linea central superior
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

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(75, 70);
ctx.lineTo(125, 118); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(200, 98); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

	

// --------------------------------------------

// Linea corte derecho 90
ctx.beginPath();
ctx.moveTo(200, 98);
ctx.lineTo(200, 68);
ctx.lineTo(125, 40);
ctx.lineTo(75, 70);
ctx.stroke();
ctx.closePath();


// Linea medio corte central
ctx.beginPath();
ctx.moveTo(200, 98);
ctx.lineTo(174, 89);  
ctx.stroke();
ctx.closePath();

// Linea medio cuadro frontal
ctx.beginPath();
ctx.moveTo(125, 118);
ctx.lineTo(175, 88);
ctx.lineTo(175, 76);
ctx.lineTo(107, 50);
ctx.stroke();
ctx.closePath();

// rampa frontal
ctx.beginPath();
ctx.moveTo(95, 58);
ctx.lineTo(145, 105);
ctx.stroke();
ctx.closePath();

// linea corte atras 
ctx.beginPath();
ctx.moveTo(125, 85);
ctx.lineTo(135, 78);
ctx.lineTo(135, 60);
ctx.stroke();
ctx.closePath();
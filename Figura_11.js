// FIGURA
// function ViewFigure11(){

	var canvas = document.getElementById('CanvSect11');
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
ctx.lineTo(220, 110);
ctx.lineTo(220, 60); // linea 90° derecha 
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 105);
ctx.lineTo(50, 75); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 60); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.lineTo(107, 27);
ctx.stroke();
ctx.closePath();

// Linea corte derecha arriba 
ctx.beginPath();
ctx.moveTo(220, 60);
ctx.lineTo(200, 70);
ctx.stroke();
ctx.closePath();


// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(107, 53); 
ctx.lineTo(50, 75); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(50, 76);
ctx.lineTo(70, 85);
ctx.lineTo(70, 98); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(200, 105); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.lineTo(200, 70);
ctx.lineTo(145, 50);
ctx.lineTo(154, 45);
ctx.lineTo(108, 27);
ctx.lineTo(108, 70);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea corte medio (1)
ctx.beginPath();
ctx.lineTo(108, 70);
ctx.lineTo(70, 85);
ctx.stroke();
ctx.closePath();

// liena corte medio (2)
ctx.beginPath();
ctx.moveTo(200, 105);
ctx.lineTo(153, 87);
ctx.stroke();
ctx.closePath();

// Liena corte medio (90)
ctx.beginPath();
ctx.moveTo(145, 50);
ctx.lineTo(145, 63);
ctx.stroke();
ctx.closePath();

// cuadro menor izquierda 
ctx.beginPath();
ctx.moveTo(70, 98);
ctx.lineTo(95, 88);
ctx.stroke();
ctx.closePath();

// cubo medio
ctx.beginPath();
ctx.moveTo(125, 80);
ctx.lineTo(95, 68);
ctx.lineTo(95, 88);
ctx.lineTo(125, 100);
ctx.lineTo(125, 80);
ctx.lineTo(153, 65);
ctx.lineTo(153, 87);
ctx.lineTo(125, 100);
ctx.stroke();
ctx.closePath();

// cubo medio 2 
ctx.beginPath();
ctx.moveTo(153, 65);
ctx.lineTo(125, 55);
ctx.lineTo(125, 80);
ctx.lineTo(95, 68);
ctx.lineTo(125, 55);
ctx.stroke();
ctx.closePath();
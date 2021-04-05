// ------------------ CUBO BASE BASICA ------------------

// FIGURA
// function ViewFigure14(){

	var canvas = document.getElementById('CanvSect14');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(55, 105);
ctx.lineTo(55, 60); // linea 90° izquierda
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
ctx.moveTo(120, 20);
ctx.lineTo(55, 60); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// // linea inferior cara #2 - #3
// ctx.beginPath();
// ctx.moveTo(50, 85); // Linea barra Base 2.0 Izquierda 
// ctx.lineTo(150, 130);
// ctx.lineTo(220, 85); // Linea barra base 2.0 (Vista  frontal- lateral)
// ctx.stroke();
// ctx.closePath();

// --------------------------------------------

// Lineas bases cubo (derecha)
ctx.beginPath();
ctx.moveTo(200, 113);
ctx.lineTo(200, 68);
ctx.lineTo(98, 32);
ctx.stroke();
ctx.closePath();

// Lineas bases cubo (derecha)
ctx.beginPath();
ctx.moveTo(80, 115);
ctx.lineTo(80, 70);
ctx.lineTo(127, 42);
ctx.stroke();
ctx.closePath();

// }

function ViewVist_Sup14() {}
function ViewVist_Front14() {}
function ViewVist_Lat14() {}
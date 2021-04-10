// ------------------ CUBO BASE BASICA ------------------

// FIGURA
// function ViewFigure14(){

	var canvas = document.getElementById('CanvSect14');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(200, 113); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 73); // linea 90° derecha 
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(80, 114); // Liena izquierda (BASE CUBO)
ctx.lineTo(55, 105);
ctx.lineTo(55, 60); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(161, 34); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.moveTo(120, 20);
ctx.lineTo(55, 60); // Conector base Arriba - Base Abajo 
ctx.lineTo(80, 70);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Lineas bases cubo (derecha)
ctx.beginPath();
ctx.moveTo(163, 100);
ctx.lineTo(200, 113);
ctx.lineTo(200, 85);
ctx.stroke();
ctx.closePath();

// Lineas bases cubo (izquierda)
ctx.beginPath();
ctx.moveTo(80, 113);
ctx.lineTo(80, 70);
ctx.lineTo(127, 42);
ctx.lineTo(140, 47);
ctx.stroke();
ctx.closePath();

// Linea base abajo 

ctx.beginPath();	
ctx.moveTo(80, 113);
ctx.lineTo(97, 102);
ctx.lineTo(135, 118);
ctx.stroke();
ctx.closePath();

// recta abajo
ctx.beginPath();
ctx.moveTo(97, 102);
ctx.lineTo(97, 60);
ctx.stroke();
ctx.closePath();

// # RECTANGULO 1
ctx.beginPath();
ctx.moveTo(97, 60);
ctx.lineTo(115, 67);
ctx.lineTo(120, 64);
ctx.lineTo(102, 57);
ctx.stroke();
ctx.closePath();

// # RECTANGULO 2 (bajada)
ctx.beginPath();
ctx.moveTo(120, 64);
ctx.lineTo(120, 80);
ctx.lineTo(115, 83);
ctx.lineTo(115, 67);
ctx.stroke();
ctx.closePath();

// # RECTANGULO 3
ctx.beginPath();
ctx.moveTo(115, 83);
ctx.lineTo(135, 90);
ctx.lineTo(140, 87);
ctx.lineTo(120, 80);
ctx.stroke();
ctx.closePath();

// # RECTANGULO 3 (figura final)
ctx.beginPath();
ctx.moveTo(135, 90);
ctx.lineTo(135, 118);
ctx.lineTo(163, 100);
ctx.lineTo(163, 90);
ctx.lineTo(140, 105);
ctx.lineTo(140, 87);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(127, 43);
ctx.lineTo(127, 77);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(163, 90);
ctx.lineTo(127, 77);
ctx.stroke();
ctx.closePath();

// ---------- parte lateral derecha ----------

// Cuadro atras base 
ctx.beginPath();
ctx.moveTo(160, 34);
ctx.lineTo(140, 46);
ctx.lineTo(140, 65);
ctx.lineTo(160, 54);
ctx.lineTo(160, 34);
ctx.stroke();
ctx.closePath();

// conector triangulo (acostado)
ctx.beginPath();
ctx.moveTo(160, 54);
ctx.lineTo(220, 72);
ctx.lineTo(200, 85);
ctx.lineTo(140, 65);
ctx.stroke();
ctx.closePath();



// }

function ViewVist_Sup14() {}
function ViewVist_Front14() {}
function ViewVist_Lat14() {}
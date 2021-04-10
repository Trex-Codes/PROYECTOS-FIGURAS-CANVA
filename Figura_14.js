// FIGURA
function ViewFigure14(){

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
}

// VISTA SUPERIOR
function ViewVist_Sup14() {

	var canvas = document.getElementById('CanvSect14');
	var ctx = canvas.getContext('2d');
  
	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION SUPERIOR ---------- 

// forma
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
ctx.moveTo(25, 15);
ctx.lineTo(25, 135);
ctx.lineTo(125, 135);
ctx.lineTo(125, 120);
ctx.lineTo(175, 120);
ctx.lineTo(175, 105);
ctx.lineTo(125, 105);
ctx.lineTo(125, 75);
ctx.lineTo(175, 75);
ctx.lineTo(175, 15);
ctx.lineTo(25, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro lateral derecho
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.fillRect(175, 15, 100, 60);
ctx.strokeRect(175, 15, 100, 60);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

// cuadro mayor
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.fillRect(125, 75, 100, 30);
ctx.strokeRect(125, 75, 100, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro menor #1
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.fillRect(175, 105, 50, 15);
ctx.strokeRect(175, 105, 50, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front14() {

	var canvas = document.getElementById('CanvSect14');
	var ctx = canvas.getContext('2d');
  
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION LATERAL IZQUIERDA - MEDIA - LATERAL DERECHA ----------

	// Cuadro lateral izquierdo
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.fillRect(25, 15, 75, 120);
	ctx.strokeRect(25, 15, 75, 120);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();

	// cuadro medio 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.moveTo(100, 15);
	ctx.lineTo(100, 135);
	ctx.lineTo(200, 135);
	ctx.lineTo(200, 45);
	ctx.lineTo(150, 45);
	ctx.lineTo(150, 15);
	ctx.lineTo(100, 15);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();

	// cuadro lateral derecho
	ctx.beginPath();
	ctx.fillStyle = "rgba(164, 219, 36, 0.7)";
	ctx.fillRect(200, 45, 75, 90);
	ctx.strokeRect(200, 45, 75, 90);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat14() {

	var canvas = document.getElementById('CanvSect14');
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION LATERAL IZQUIERDA ----------

	// Cuadro mayor 
	ctx.beginPath();
	ctx.fillStyle = "rgba(164, 219, 36, 0.7)";
	ctx.fillRect(25, 15, 100, 120);
	ctx.strokeRect(	25, 15, 100, 120);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// ---------- SECCION MEDIA ----------

	// cuadro menor superior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.fillRect(125, 15, 25, 30);
	ctx.strokeRect(125, 15, 25, 30);
	ctx.save();	
	ctx.fill();	
	ctx.closePath();	

	// Cuadro mayor medio 
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.fillRect(150, 15, 50, 90);
	ctx.strokeRect(150, 15, 50, 90);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// figura media inferior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.moveTo(125, 45);
	ctx.lineTo(125, 135);
	ctx.lineTo(200, 135);
	ctx.lineTo(200, 105);
	ctx.lineTo(150, 105);
	ctx.lineTo(150, 45);
	ctx.lineTo(125, 45);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// ---------- SECCION LATERAL DERECHA ----------

	// cuadro superior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.fillRect(200, 15, 75, 30);
	ctx.strokeRect(200, 15, 75, 30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// cuadro inferior 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(200, 45, 75, 90);
	ctx.strokeRect(200, 45, 75, 90);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();		
}
// FIGURA
function ViewFigure15(){

	var canvas = document.getElementById('CanvSect15');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(210, 106);
ctx.lineTo(210, 65);
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.lineTo(50, 105);
ctx.lineTo(50, 60); // linea 90° izquierda
// ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(132, 40); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(101, 30); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.moveTo(101, 30);
ctx.lineTo(50, 60); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea media
ctx.beginPath();
ctx.moveTo(70, 113);
ctx.lineTo(70, 88);
ctx.lineTo(125, 110);
ctx.lineTo(125, 134);
ctx.stroke();


// cuadro medio superior (linea1)
ctx.beginPath();
ctx.moveTo(95, 78);
ctx.lineTo(95, 62);
ctx.lineTo(150, 31);
ctx.stroke();
ctx.closePath();

// cuadro medio superior (linea2)
ctx.beginPath();
ctx.moveTo(115, 87);
ctx.lineTo(115, 70);
ctx.lineTo(170, 37);
ctx.lineTo(170, 55);
ctx.lineTo(115, 87);
ctx.stroke();
ctx.closePath();

// linea medio superior 
ctx.beginPath();
ctx.moveTo(95, 62);
ctx.lineTo(115, 70);
ctx.stroke();
ctx.closePath();

// linea atras conexion cubo 
ctx.beginPath();
ctx.moveTo(170, 55);
ctx.lineTo(210, 65);
ctx.lineTo(150, 100);
ctx.stroke();
ctx.closePath();

// liena figura superior corte atras 
ctx.beginPath();
ctx.moveTo(150, 31);
ctx.lineTo(170, 37);
ctx.stroke();
ctx.closePath();

// linea medio cara frontal (IZQ)
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(115, 87);
ctx.stroke();
ctx.closePath();

// linea medio cara frontal (DER)
ctx.beginPath();
ctx.moveTo(95, 78);
ctx.lineTo(50, 60);
ctx.stroke();
ctx.closePath();

// linea inferior cara frontal (IZQ)
ctx.beginPath();
ctx.moveTo(150, 145);
ctx.lineTo(125, 134);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(95, 98);
ctx.lineTo(70, 113);
ctx.lineTo(50, 105);
ctx.stroke();
ctx.closePath();
}

// VISTA SUPERIOR 
function ViewVist_Sup15() {

	var canvas = document.getElementById('CanvSect15');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION DERECHA ---------- 

	// cuadro mayor 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(175, 15, 100, 120);
	ctx.strokeRect(175, 15, 100, 120);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	// ---------- SECCION MEDIA ---------- 

	// cuadro medio 
	ctx.beginPath();
	ctx.fillStyle = "rgba(250, 250, 4, 0.7)";
	ctx.fillRect(125, 15, 50, 120);
	ctx.strokeRect(125, 15, 50, 120);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	// ---------- SECCION IZQUIERDA ---------- 

	// cuadro mayor 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.fillRect(25, 15, 100, 120);
	ctx.strokeRect(25, 15, 100, 120);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front15() {

	var canvas = document.getElementById('CanvSect15');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION TOTAL ----------

	// figura
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.moveTo(25, 45);
	ctx.lineTo(25, 135);
	ctx.lineTo(75, 135);
	ctx.lineTo(75, 75);
	ctx.lineTo(225, 75);
	ctx.lineTo(225, 135);
	ctx.lineTo(275, 135);
	ctx.lineTo(275, 45);
	ctx.lineTo(175, 45);
	ctx.lineTo(175, 15);
	ctx.lineTo(125, 15);
	ctx.lineTo(125, 45);
	ctx.lineTo(75, 45);
	ctx.lineTo(25, 45);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat15() {

	var canvas = document.getElementById('CanvSect15');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION INFERIOR ----------

	// seccion superior
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16 , 0.7)";
	ctx.fillRect(25, 45, 250, 90);
	ctx.strokeRect(25, 45, 250, 90);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// ---------- SECCION SUPERIOR ----------

	ctx.beginPath();
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(25, 15, 250, 30);
	ctx.strokeRect(25, 15, 250, 30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}
// FIGURA
function ViewFigure12(){

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
}

// VISTA SUPERIOR
function ViewVist_Sup12(){

	var canvas = document.getElementById('CanvSect12');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION DERECHA ---------- 

// forma 
ctx.beginPath();
ctx.fillStyle = "rgba(164, 219, 36, 0.7)";
ctx.moveTo(25, 15);
ctx.lineTo(275, 15);
ctx.lineTo(275, 45);
ctx.lineTo(75, 45);
ctx.lineTo(75, 135);
ctx.lineTo(25, 135);
ctx.lineTo(25, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION IZQUIERDA ---------- 

// forma
ctx.beginPath();
ctx.fillStyle = 'rgba(240, 235, 234, 0.7)';
ctx.fillRect(225, 45, 50, 90);
ctx.strokeRect(225, 45, 50, 90);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

// forma 
ctx.beginPath();
// ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
ctx.fillRect(75, 105, 150, 30);
ctx.strokeRect(75, 105, 150, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front12(){

	var canvas = document.getElementById('CanvSect12');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION GRANDE ----------

// figura 
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.moveTo(25, 15);
ctx.lineTo(25, 135);
ctx.lineTo(275, 135);
ctx.lineTo(275, 105);
ctx.lineTo(175, 105);
ctx.lineTo(125, 15);
ctx.lineTo(25, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// ---------- SECCION CUADRO MEDIO ----------

// cuadro medio
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.moveTo(275, 105);
ctx.lineTo(275, 15);
ctx.lineTo(125, 15);
ctx.lineTo(142, 45);
ctx.lineTo(225, 45);
ctx.lineTo(225, 105);
ctx.lineTo(275, 105);
ctx.stroke();
ctx.fill();
ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat12(){

	var canvas = document.getElementById('CanvSect12');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- FIGURA TOTAL ----------

// figura inferior 
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.moveTo(275, 15);
ctx.lineTo(275, 135);
ctx.lineTo(25, 135);
ctx.lineTo(25, 105);
ctx.lineTo(225, 105);
ctx.lineTo(225, 15);
ctx.lineTo(275, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// ---------- SECCION LATERAL IZQUIERDA ----------

// cuadro figura 
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
ctx.strokeRect(25, 15, 50, 90);
ctx.fillRect(25, 15, 50, 90);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// ---------- SECCION MEDIO ----------

// cuadro medio
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.strokeRect(75, 15, 150, 90);
ctx.fillRect(75, 15, 150, 90);
ctx.stroke();
ctx.fill();
ctx.closePath();
}
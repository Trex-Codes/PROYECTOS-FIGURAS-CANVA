// FIGURA
function ViewFigure8(){

	var canvas = document.getElementById('CanvSect8');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

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
ctx.lineTo(200, 67); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 85); // linea 90° izquierda
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
ctx.lineTo(102, 30); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(50, 85); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(200, 98); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Linea 90 parte derecha
ctx.beginPath();
ctx.moveTo(50, 85);
ctx.lineTo(102, 58);
ctx.lineTo(102, 30);
ctx.lineTo(200, 67);
ctx.lineTo(200, 98);
ctx.stroke();
ctx.closePath();

	// Linea medio izquierda
	ctx.beginPath();
	ctx.moveTo(102, 58);
	ctx.lineTo(130, 69);
	ctx.stroke();
	ctx.closePath();

	// linea medio derecha 
	ctx.beginPath();
	ctx.moveTo(165, 84);
	ctx.lineTo(200, 98);
	ctx.stroke();
	ctx.closePath();

// parte cuadro arriba
ctx.beginPath();
ctx.moveTo(130, 52);
ctx.lineTo(130, 69);
ctx.stroke();
ctx.closePath();

// parte cuadro abajo
ctx.beginPath();
ctx.moveTo(130, 69);
ctx.lineTo(95, 90);
ctx.lineTo(130, 105);
ctx.lineTo(165, 84);
ctx.lineTo(165, 66);
ctx.lineTo(130, 52);
ctx.stroke();
ctx.closePath();

// linea interna medio
ctx.beginPath();
ctx.moveTo(145, 58);
ctx.lineTo(145, 80);
ctx.lineTo(115, 98);
ctx.stroke();
ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup08(){

	var canvas = document.getElementById('CanvSect8');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION INFERIOR ---------- 

// Figura inferior
ctx.beginPath();
ctx.fillStyle = "rgba(164, 219, 36, 0.7)";
ctx.moveTo(25, 45);
ctx.lineTo(25, 135);
ctx.lineTo(275, 135);
ctx.lineTo(275, 45);
ctx.lineTo(225, 45);
ctx.lineTo(225, 105);
ctx.lineTo(75, 105);
ctx.lineTo(75, 45);
ctx.lineTo(25, 45);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

// Rectangulo superior
ctx.beginPath();
ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
ctx.fillRect(25, 15, 250, 30);
ctx.strokeRect(25, 15, 250, 30);
ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front08(){

	var canvas = document.getElementById('CanvSect8');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION SUPERIOR ---------- 

// forma superior 
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.moveTo(25, 105);
ctx.lineTo(25, 15);
ctx.lineTo(275, 15);
ctx.lineTo(275, 105);
ctx.lineTo(225, 105);
ctx.lineTo(225, 45);
ctx.lineTo(75, 45);
ctx.lineTo(75, 105);
ctx.lineTo(25, 105);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

// cuadro inferior 
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.fillRect(25, 105, 250, 30);
ctx.strokeRect(25, 105, 250, 30);
ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat08(){

	var canvas = document.getElementById('CanvSect8');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION INFERIOR ---------- 

// figura lateral
ctx.beginPath();
ctx.fillStyle = "lightblue";
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
}
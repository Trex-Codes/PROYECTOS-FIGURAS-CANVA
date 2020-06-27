// FIGURA
function ViewFigure5(){

	var canvas = document.getElementById('CanvSect5');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 125);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 35); // linea 90° derecha 
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 35); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 35); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 10); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(120, 10);
ctx.lineTo(50, 35); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(50, 60); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 125);
ctx.lineTo(220, 60); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

// ---------------------------------------------------------

// Linea triangulo superior 
ctx.beginPath();
ctx.moveTo(220, 35);
ctx.lineTo(50, 35);
ctx.lineTo(50, 60);
ctx.lineTo(220, 60);
ctx.stroke();
ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup05(){

	var canvas = document.getElementById('CanvSect5');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Triangulo amarillo 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.moveTo(25, 135);
	ctx.lineTo(25, 15);
	ctx.lineTo(275, 15);	
	ctx.lineTo(25, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// Triangulo rojo
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.moveTo(275, 135);
	ctx.lineTo(275, 15);
	ctx.lineTo(25, 135);
	ctx.lineTo(275, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front05(){

	var canvas = document.getElementById('CanvSect5');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION SUPERIOR ---------- 

	// cuadro largo 
	ctx.beginPath();
	ctx.fillStyle = "rgba(232, 235, 214, 0.7)";
	ctx.fillRect(25, 15, 250, 30);
	ctx.strokeRect(25, 15, 250, 30);
	ctx.stroke();
	ctx.closePath();


	// ---------- SECCION INFERIOR ---------- 

	// triangulo medio
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.moveTo(150, 105);
	ctx.lineTo(25, 45);
	ctx.lineTo(275, 45);
	ctx.lineTo(150, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// trapecio izquierdo 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.moveTo(150, 135);
	ctx.lineTo(150, 105);
	ctx.lineTo(25, 45);
	ctx.lineTo(25, 135);
	ctx.lineTo(150, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();	

	// trapecio derecho
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.moveTo(150, 135);
	ctx.lineTo(150, 105);
	ctx.lineTo(275, 45);
	ctx.lineTo(275, 135);
	ctx.lineTo(150, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat05(){

	var canvas = document.getElementById('CanvSect5');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
// ---------- SECCION SUPERIOR ---------- 

	// cuadrado superior medio 
	ctx.beginPath();
	ctx.fillStyle = "rgba(232, 235, 214, 0.7)";
	ctx.fillRect(25, 15, 250, 30);
	ctx.strokeRect(25, 15, 250, 30);
	ctx.stroke();
	ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

	// trapecio medio 
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.moveTo(25, 45);
	ctx.lineTo(275, 45);
	ctx.lineTo(25, 105);
	ctx.lineTo(25, 45);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// trapecio inferior
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.moveTo(25, 105);
	ctx.lineTo(25, 135);
	ctx.lineTo(275, 135);
	ctx.lineTo(275, 45);
	ctx.lineTo(25, 105);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}



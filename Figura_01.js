// FIGURA
function ViewFigure1(){

	var canvas = document.getElementById('CanvSect1');
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
ctx.lineTo(190, 75); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 85); // linea 90° izquierda
// ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 55); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(190, 45); 
// ctx.lineTo(190, 45); // Liena conector cuadros atras Superior
// ctx.lineTo(90, 35);
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.moveTo(150, 30); // Linea atras Union cubo (SUPERIOR) 
ctx.lineTo(120, 20);
ctx.lineTo(90, 35); // Linea izquierda Conector
ctx.lineTo(90, 65);
ctx.lineTo(50, 85); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

		// Segundo cuadro - FORMA CUBO (Vista lateral)
		ctx.beginPath();
		ctx.moveTo(150, 30);
		ctx.lineTo(150, 50);
		ctx.lineTo(120, 65);
		ctx.stroke();
		ctx.closePath();
		
// --------------------------------------------

// LINEA INTERMEDIO (Cuadro #1)
ctx.beginPath();
ctx.moveTo(190, 105);
ctx.lineTo(190, 75);
ctx.lineTo(160, 63); // Liena cuadro 1 (Vista frontal)
// ctx.lineTo(120, 47); // Linea union Cuadro #1 - cuadro #2 (Delantera Superior)
ctx.stroke();
ctx.closePath();

		// Linea central cuadro #1 Derecho
		ctx.beginPath();
		ctx.moveTo(190, 45);
		ctx.lineTo(190, 65);
		ctx.lineTo(160, 80);
		ctx.stroke();
		ctx.closePath();

				// Linea conector inferio atras 
				ctx.beginPath();
				ctx.moveTo(190, 65);
				ctx.lineTo(150, 50);
				ctx.stroke();
				ctx.closePath();


// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(50, 85); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(85, 100);
// ctx.lineTo(190, 105); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

		// Liena conexion Base #1 Base #2 (Vista Lateral)
		ctx.beginPath();
		ctx.moveTo(190, 105);
		ctx.lineTo(150, 130);
		ctx.lineTo(150, 130);
		ctx.lineTo(120, 115);
		ctx.stroke();
		ctx.closePath();

// --------------------------------------------

	// CUADRO IZQUIERDA
	ctx.beginPath();
	ctx.moveTo(150, 30); // Cuadro izquierdo 
	ctx.lineTo(120, 47);
	ctx.lineTo(120, 65);
	ctx.lineTo(160, 80); // // Linea union Cuadro #1 - cuadro #2 (Delantera Inferior)
	ctx.stroke();
	ctx.closePath();

				// LINEA CUADRO IZQUIERDO DELANTERO
				ctx.beginPath();
				ctx.moveTo(120, 47);
				ctx.lineTo(90, 35);
				ctx.stroke();
				ctx.closePath();

	// Lineas superior cara #1 - #2 (2)
	ctx.beginPath();
	ctx.moveTo(190, 45); // Linea Cuadro #1 Derecha
	ctx.lineTo(160, 63);
	ctx.lineTo(160, 80); // Cuadro #1 derecho conector (BASE INFERIOR DELANTERA)
	ctx.stroke();
	ctx.closePath();

	// Lineas CENTRAL BAJO MEDIO
	ctx.beginPath();
	ctx.moveTo(190, 105); // LINEA INTERMEDIO (Seperador de Bases)
	ctx.lineTo(90, 65);
	ctx.stroke();
	ctx.closePath();

// CUADRO INTERNO MEDIO BASE #1
	ctx.beginPath();
	ctx.moveTo(119, 115); // CUADRO INTERNO BASE #1
	ctx.lineTo(135,105);
	ctx.lineTo(100, 90);
	ctx.lineTo(85, 100);
	ctx.stroke();
	ctx.closePath();

		// Linea derecha (FRONTAL)
		ctx.beginPath();
		ctx.moveTo(119, 115);
		ctx.lineTo(119, 130);
		ctx.lineTo(135, 105);
		ctx.stroke();
		ctx.closePath();

		// Linea izquierda (FRONTAL)
		ctx.beginPath();
		ctx.moveTo(85, 100);
		ctx.lineTo(85, 115);
		ctx.lineTo(100, 90);
		ctx.stroke();
		ctx.closePath();


// CUADRO IZQUIERDA (linea recta 90° -- IZQUIERDA)
ctx.beginPath();
ctx.moveTo(120, 20);
ctx.lineTo(120, 50);
ctx.lineTo(90, 65);
ctx.stroke();
ctx.closePath();
		
		// // Lineea atras conector (INFERIOR)
		ctx.beginPath();
		ctx.moveTo(120, 50);
		ctx.lineTo(190, 75);
		ctx.lineTo(190, 45);
		ctx.stroke();
		ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup01(){

  var canvas = document.getElementById('CanvSect1');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

	// PLANO PRINCIPAL
	ctx.beginPath();
	ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
	ctx.strokeRect(25, 15, 250, 120);
	ctx.closePath();

	// ---------- SECCION DERECHA ---------- 
	
	// Cuadro superior
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16 , 0.7)";
	ctx.fillRect(25, 15, 125, 35);
	ctx.strokeRect(25, 15, 125, 35);
	ctx.closePath();

	// Cuadro medio
	ctx.beginPath();
	ctx.fillStyle = "rgba(250, 250, 4, 0.7)";
	ctx.fillRect(25, 50, 125, 50);
	ctx.strokeRect(25, 50, 125, 50);
	ctx.closePath();

	// cuadro inferior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16 , 0.7)";
	ctx.fillRect(25, 100, 125, 35);
	ctx.strokeRect(25, 100, 125, 35);
	ctx.closePath();

	// ---------- SECCION IZQUERDA ----------

	// cuadro medio
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(215, 50, 60, 50);
	ctx.closePath();

	// Contorno seccion grande
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.moveTo(150, 15);
	ctx.lineTo(150, 135);
	ctx.lineTo(275, 135);
	ctx.lineTo(275, 100);
	ctx.lineTo(215, 100);
	ctx.lineTo(215, 50);
	ctx.lineTo(275, 50);
	ctx.lineTo(275, 15);
	ctx.lineTo(150, 15);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front01(){

	var canvas = document.getElementById('CanvSect1');
  	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// PLANO PRINCIPAL
	ctx.beginPath();
	ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
	ctx.strokeRect(25, 15, 250, 120);
	ctx.closePath();

// ---------- SECCION INFERIOR ---------- 

	// cuadro derecho
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16 , 0.7)";
	ctx.fillRect(25, 75, 75, 60);
	ctx.strokeRect(25, 75, 75, 60);
	ctx.closePath();

// Cuadro medio
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.fillRect(100, 75, 100, 60);
	ctx.strokeRect(100, 75, 100, 60);
	ctx.closePath();

	// cuadro izquierdo 
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16 , 0.7)";
	ctx.fillRect(200, 75, 75, 60);
	ctx.strokeRect(200, 75, 75, 60);
	ctx.closePath();


	// ---------- SECCION SUPERIOR ----------

	// cuadro medio 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(100, 15, 95, 30);
	ctx.closePath();
	

	// linea central
	ctx.beginPath();
	ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
	ctx.moveTo(25, 75);
	ctx.lineTo(275, 75);
	ctx.lineTo(275, 15);
	ctx.lineTo(195, 15);
	ctx.lineTo(195, 45);
	ctx.lineTo(100, 45);
	ctx.lineTo(100, 15);
	ctx.lineTo(25, 15);
	ctx.lineTo(25, 75);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat01(){

	var canvas = document.getElementById('CanvSect1');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Linea figura
	ctx.beginPath();
	ctx.fillStyle = 'lightblue';
	ctx.moveTo(25, 135);
	ctx.lineTo(275, 135);
	ctx.lineTo(275, 15);
	ctx.lineTo(150, 15);
	ctx.lineTo(150, 95);
	ctx.lineTo(25, 95);
	ctx.lineTo(25, 135);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}
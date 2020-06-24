// FIGURA
function ViewFigure4(){

	var canvas = document.getElementById('CanvSect4');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }


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
ctx.lineTo(200, 113);
ctx.lineTo(200, 98);
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.lineTo(50, 100);
ctx.lineTo(50, 85); // Linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(195, 45); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(120, 20);
ctx.lineTo(98, 31); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea superior izquierda
ctx.beginPath();
ctx.moveTo(99, 60);
ctx.lineTo(50, 85); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(75, 96);
ctx.stroke();
ctx.closePath();

// linea superior derecha (2)
ctx.beginPath();
ctx.moveTo(200, 97);
ctx.lineTo(150, 130);
ctx.lineTo(123, 118);
ctx.stroke();
ctx.closePath();

// linea inferior derecha (1)
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(75, 111);
ctx.stroke();
ctx.closePath();


// linea inferior derecha (2)
ctx.beginPath();
ctx.moveTo(150, 145);
ctx.lineTo(123, 133);
ctx.stroke();
ctx.closePath();
	// --------------------------------------------

	// Linea 90° izquierda
	ctx.beginPath();
	ctx.moveTo(175, 57);
	ctx.lineTo(99, 31);
	ctx.lineTo(99, 60);
	ctx.lineTo(200, 98);
	ctx.stroke();
	ctx.closePath();

	// cuadros izquierdo 
	ctx.beginPath();
	ctx.lineTo(105, 80);
	ctx.lineTo(75, 97);
	ctx.lineTo(75, 111);
	ctx.lineTo(105, 95);
	ctx.stroke();
	ctx.closePath();

	// Liena medio mitad
	ctx.beginPath();
	ctx.moveTo(105, 80);
	ctx.lineTo(105, 95);
	ctx.lineTo(139, 108);
	ctx.stroke();
	ctx.closePath();

	// cubo atras cortado
	ctx.beginPath();
	ctx.moveTo(194, 95);
	ctx.lineTo(194, 45);
	ctx.lineTo(174, 57);
	ctx.lineTo(174, 88); 
	ctx.stroke();
	ctx.closePath();

	// cuadro derecho 
	ctx.beginPath();
	ctx.moveTo(155, 100);
	ctx.lineTo(122, 118);
	ctx.lineTo(122, 133);
	ctx.stroke();
	ctx.closePath();

	// corte tabla lateral
	ctx.beginPath();
	ctx.moveTo(105, 80);
	ctx.lineTo(155, 100);
	ctx.stroke();
	ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup04(){

  var canvas = document.getElementById('CanvSect4');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION SUPERIOR ----------

	// Cuadro superior 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(25, 15, 200, 30);
	ctx.strokeRect(25, 15, 200, 30);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
 
	// ---------- SECCION INFERIOR ----------

	// figura 
	ctx.beginPath();
	ctx.fillStyle = "lightgreen";
	ctx.moveTo(25, 45);
	ctx.lineTo(25, 135);
	ctx.lineTo(75, 135);
	ctx.lineTo(75, 75);
	ctx.lineTo(225, 75);
	ctx.lineTo(225, 135);
	ctx.lineTo(275, 135);
	ctx.lineTo(275, 45);
	ctx.lineTo(25, 45);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front04(){

	var canvas = document.getElementById('CanvSect4');
  	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION INFERIOR ---------- 

	// cuadrado izquierdo
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(25, 105, 50, 30);
	ctx.strokeRect(25, 105, 50, 30);
	ctx.stroke();
	ctx.closePath();

	// cuadrado medio largo
	ctx.beginPath();
	ctx.fillStyle = "pink";
	ctx.fillRect(75, 105, 150, 30);
	ctx.strokeRect(75, 105, 150, 30);

	//cuadrado derecha
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(225, 105, 50, 30);
	ctx.strokeRect(225, 105, 50, 30);
	ctx.closePath();

	// SECCION SUPERIOR ----------

	// cuadrado grande
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.fillRect(25, 15, 200, 90);
	ctx.strokeRect(25, 15, 200, 90);
}

// VISTA LATERAL
// function ViewVist_Lat04(){

	var canvas = document.getElementById('CanvSect4');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
 	
	// ---------- SECCION INFERIOR ----------

	// Cuadro izquierdo
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
	ctx.fillRect(25, 105, 200, 30);
	ctx.strokeRect(25, 105, 200, 30);
	ctx.stroke();
	ctx.closePath();

	// ---------- SECCION INFERIOR ----------

	// cuadro lateral derecho
	ctx.beginPath();
	ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
	ctx.fillRect(225, 15, 50, 120);
	ctx.strokeRect(225, 15, 50, 120);


// }
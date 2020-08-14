// FIGURA
function ViewFigure2(){

	var canvas = document.getElementById('CanvSect2');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 145);
ctx.lineTo(150, 130);
ctx.stroke();
ctx.fill();
ctx.closePath();

// LINEA CUBO IZQUIERDA 
ctx.beginPath();
ctx.moveTo(35, 95);
ctx.lineTo(65, 105);
ctx.stroke();
ctx.closePath();	
	
	// LINEA INFERIOR (1)
	ctx.beginPath();
	ctx.moveTo(120, 120);
	ctx.lineTo(150, 130);
	ctx.lineTo(195, 100);
	ctx.stroke();
	ctx.closePath();

	// LINEA INFERIOR (2)
	ctx.beginPath();
	ctx.moveTo(120, 135);
	ctx.lineTo(150, 145);
	ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
	ctx.lineTo(220, 100);
	ctx.lineTo(220, 70); // linea 90° derecha 
	ctx.stroke();
	ctx.closePath();

// --------------------------------------------

// Linea medio (VISTA LATERAL)
ctx.beginPath();
ctx.moveTo(195, 100);
ctx.lineTo(195, 85); 
ctx.stroke();
ctx.closePath();

// Linea completa izquierda  //////////////////
ctx.beginPath();
ctx.lineTo(95, 25);
ctx.lineTo(95, 65);
ctx.lineTo(35, 95);
ctx.lineTo(35, 110);
ctx.lineTo(35, 110);
ctx.lineTo(65, 120);
ctx.stroke();
ctx.closePath();
				
// LINEA MEDIO BASE INFERIOR (1)
ctx.beginPath();
ctx.moveTo(195, 100);
ctx.lineTo(95, 65);
ctx.stroke();
ctx.closePath();

			// Linea inferior 
			ctx.beginPath();
			ctx.moveTo(105, 85);
			ctx.lineTo(150, 101);
			ctx.stroke();
			ctx.closePath();

// LINEA (VISTA SUPERIOR) (1)
ctx.beginPath();
ctx.lineTo(152, 101);
ctx.lineTo(120, 120);
ctx.lineTo(120, 135);
ctx.stroke();
ctx.closePath();
				
// LINEA (VISTA SUPERIOR) (2)
ctx.beginPath();
ctx.lineTo(105, 85);
ctx.lineTo(65, 105);
ctx.lineTo(65, 120);
ctx.lineTo(105, 98);
ctx.lineTo(105, 85);
ctx.stroke();
ctx.closePath();

		// LINEA MEDIO INFERIOR Conector
		ctx.beginPath();
		ctx.moveTo(105, 98);
		ctx.lineTo(138, 110);
		ctx.stroke();
		ctx.closePath();

		
			// LINEA BASE IZQUIERDA (2)
			ctx.beginPath();
			ctx.moveTo(120, 35);
			ctx.lineTo(220, 70);
			ctx.lineTo(195, 85);
			ctx.lineTo(125, 60);
			// ctx.lineTo(120, 35);
			ctx.stroke();
			ctx.closePath();

					// Liena atras izquierda
					ctx.beginPath();
					ctx.moveTo(120, 35);
					ctx.lineTo(95, 50);
					ctx.stroke();
					ctx.closePath();

// Cubo linea terminal 
ctx.beginPath();
ctx.moveTo(125, 60);
ctx.lineTo(149, 45);
ctx.lineTo(120, 10);
ctx.lineTo(95, 25);
ctx.lineTo(125, 60);
ctx.stroke();
ctx.closePath();
					
	// linea mitad atras 
	ctx.beginPath();
	ctx.moveTo(120, 10);
	ctx.lineTo(120, 35);
	ctx.stroke();
	ctx.closePath();

			// LINEA CONECTOR 2 TRIANGULOS -----
			ctx.beginPath();
			ctx.moveTo(105, 65);
			ctx.lineTo(75, 55);
			ctx.lineTo(57, 73);
			ctx.stroke();
			ctx.closePath();

			// recta parte izquierda cuadrado 
			ctx.beginPath();
			ctx.moveTo(75, 55);
			ctx.lineTo(75, 75);
			ctx.lineTo(105, 85);
			ctx.stroke();
			ctx.closePath();

		// recta 90 (2 DERECHA)
		ctx.beginPath();
		ctx.moveTo(105, 85);
		ctx.lineTo(105, 65);
		ctx.lineTo(87, 83);
		ctx.stroke();
		ctx.closePath();

// Linea parte 1
ctx.beginPath();			
ctx.lineTo(87, 94);
ctx.lineTo(57, 85);
ctx.stroke();
ctx.closePath();

// cuadro TRIANGULOS
ctx.beginPath();
ctx.moveTo(57, 85);
ctx.lineTo(57, 73);
ctx.lineTo(87, 83);
ctx.lineTo(87, 95);
ctx.stroke();
ctx.closePath();
}

// VISTA SUPERIOR
function ViewVist_Sup02(){

	var canvas = document.getElementById('CanvSect2');
  	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// // PLANO PRINCIPAL
	// ctx.beginPath();
	// ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
	// ctx.strokeRect(25, 15, 250, 120);
	// ctx.closePath();

	// ---------- SECCION SUPERIOR ---------- 

	// cuadro esquina izquierda
	ctx.beginPath();
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(25, 15, 50, 30);
	ctx.strokeRect(25, 15, 50, 30);
	ctx.closePath();

	// Cuadro derecha 
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(75, 15, 200, 30);
	ctx.strokeRect(75, 15, 200, 30);
	ctx.closePath();

	/// LIENA PARTE BLANCA 
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.moveTo(275, 45);
	ctx.lineTo(275, 135);
	ctx.lineTo(225, 135);
	ctx.lineTo(225, 75);
	ctx.lineTo(25, 75);
	ctx.lineTo(25, 45);
	ctx.lineTo(275, 45);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	// Cuadro 1 izquierda
	ctx.beginPath();
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(25, 75, 49, 30);
	ctx.strokeRect(25, 75, 49, 30);
	ctx.closePath();

	// Cuadro 2 izquierda 
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
	ctx.fillRect(25, 105, 49, 29);
	ctx.strokeRect(25, 105, 49, 29);
	ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front02(){

	var canvas = document.getElementById('CanvSect2');
  	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);


// Cuadro izquierda SUPERIOR (1)
	ctx.beginPath();
	ctx.fillStyle = "pink";
	ctx.fillRect(25, 75, 49, 30);
	ctx.strokeRect(25, 75, 49, 30);
	ctx.closePath();

	// Cuadro medio Superior largo
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
	ctx.fillRect(76, 75, 198, 30);
	ctx.strokeRect(76, 75, 198, 30);
	ctx.closePath();

	// cuadro izquierda INFERIOR (2)
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.fillRect(25, 105, 49, 29);
	ctx.strokeRect(25, 105, 49, 29);
	ctx.closePath();

	// cuadro inferior largo
	ctx.beginPath();
	ctx.fillStyle = "rgba(255, 229, 0, 0.7)";;
	ctx.fillRect(76, 105, 148, 29);
	ctx.strokeRect(76, 105, 148, 29);
	ctx.closePath();

	// Cuadro inferior derecho
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.fillRect(225, 105, 49, 29);
	ctx.strokeRect(225, 105, 49, 29);
	ctx.closePath();

 	// Triangulo 
 	ctx.beginPath();
 	ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
 	ctx.moveTo(25, 75);
 	ctx.lineTo(25, 15);
 	ctx.lineTo(75, 75);
 	ctx.stroke();
 	ctx.fill();
 	ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat02(){
	
	var canvas = document.getElementById('CanvSect2');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION INFERIOR ----------
	ctx.beginPath();
	ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
	ctx.moveTo(275, 75);
	ctx.lineTo(275, 135);
	ctx.lineTo(25, 135);
	ctx.lineTo(25, 105);
	ctx.lineTo(225, 105);
	ctx.lineTo(225, 75);
	ctx.lineTo(275, 75);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// ---------- SECCION SUPERIOR ----------

	// Cuadro Derecho
	ctx.beginPath();
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(225, 15, 50, 59);
	ctx.strokeRect(225, 15, 50, 59);
	ctx.closePath();

	// Cuadro azul rampa
	ctx.beginPath();
	ctx.fillStyle = "lightblue";
	ctx.moveTo(75, 104);
	ctx.lineTo(125, 104);
	ctx.lineTo(125, 75);
	ctx.lineTo(75, 90);
	ctx.lineTo(75, 104);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}
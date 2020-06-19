// FIGURA
// function ViewFigure2(){

	var canvas = document.getElementById('CanvSect2');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }


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

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(147, 30); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.stroke();
ctx.closePath();
	
			// Linea conector cuadro derecho
			ctx.beginPath();
			ctx.moveTo(220, 55);
			ctx.lineTo(195, 70);
			ctx.stroke();
			ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.moveTo(120, 20);
ctx.lineTo(95, 35); // Conector base Arriba - Base Abajo 
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
	ctx.lineTo(220, 55); // linea 90° derecha 
	ctx.stroke();
	ctx.closePath();

// --------------------------------------------

// Linea medio (VISTA LATERAL)
ctx.beginPath();
ctx.moveTo(195, 115);
ctx.lineTo(195, 70);
ctx.lineTo(95, 35);
ctx.lineTo(95, 65);
ctx.lineTo(35, 95);
ctx.lineTo(35, 110);
ctx.lineTo(35, 110);
ctx.lineTo(65, 120);
ctx.stroke();
ctx.closePath();
				
				// LINEA CONECTOR 90° CUADRO BAJO
/*				ctx.beginPath();
				ctx.moveTo(95, 65);
				ctx.lineTo(95, 80);
				ctx.stroke();
				ctx.closePath();
*/


// LINEA MEDIO BASE INFERIOR (1)
ctx.beginPath();
ctx.moveTo(195, 100);
ctx.lineTo(95, 65);
ctx.stroke();
ctx.closePath();


			// Linea 1
			ctx.beginPath();
			ctx.moveTo(105, 85);
			ctx.lineTo(152, 102);
			ctx.stroke();
			ctx.closePath();

// LINEA (VISTA SUPERIOR) (1)
ctx.beginPath();
ctx.lineTo(170, 90);
ctx.lineTo(120, 120);
ctx.lineTo(120, 135);
ctx.stroke();
ctx.closePath();
				
// LINEA (VISTA SUPERIOR) (2)
ctx.beginPath();
ctx.moveTo(148, 30);
ctx.lineTo(122, 45);
ctx.lineTo(122, 75);
ctx.lineTo(65, 105);
ctx.lineTo(65, 120);
ctx.lineTo(105, 98);
ctx.lineTo(105, 85);
ctx.stroke();
ctx.closePath();

		// LIENA MEDIO INFERIOR Conector
		ctx.beginPath();
		ctx.moveTo(105, 98);
		ctx.lineTo(138, 110);
		ctx.stroke();
		ctx.closePath();

// LINEA BASE ATRAS (CUBO)
ctx.beginPath();
ctx.moveTo(120, 20);
ctx.lineTo(120, 50);
ctx.lineTo(95, 65);
ctx.stroke();
ctx.closePath();
	
		
			// LINEA BASE IZQUIERDA (2)
			ctx.beginPath();
			ctx.moveTo(120, 35);
			ctx.lineTo(220, 70);
			ctx.lineTo(195, 85);
			ctx.lineTo(95, 50);
			ctx.lineTo(120, 35);
			ctx.stroke();
			ctx.closePath();


			// Cubo linea terminal
			ctx.beginPath();
			ctx.moveTo(122, 75);
			ctx.lineTo(148, 60);
			ctx.lineTo(148, 30);
			ctx.stroke();
			ctx.closePath();
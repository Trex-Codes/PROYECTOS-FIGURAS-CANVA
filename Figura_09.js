// FIGURA 
// function ViewFigure9(){

	var canvas = document.getElementById('CanvSect9');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);


// linea cental - (BASE CUBO)
ctx.moveTo(150, 128);
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
ctx.lineTo(73, 113);
ctx.lineTo(73, 98);
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 55); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(142, 28); 
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea 90~ derecha (1)   
ctx.beginPath();
ctx.lineTo(180, 61); 
ctx.lineTo(200, 68);
ctx.lineTo(200, 84);
ctx.stroke();
ctx.closePath();

// linea 90~ izquierda (2) 
ctx.beginPath();
ctx.lineTo(174, 100);
ctx.lineTo(174, 113);
ctx.lineTo(97, 82); 
ctx.stroke();
ctx.closePath();

// Liena 180~ Superior (1)
ctx.beginPath();
ctx.moveTo(173, 100);
ctx.lineTo(200, 83);
ctx.stroke();
ctx.closePath();

// Liena 180~ inferior (2)
ctx.beginPath();
ctx.moveTo(143, 28);
ctx.lineTo(121, 40);
ctx.stroke();
ctx.closePath();
		
		// linea border izquierdo
		ctx.beginPath();
		ctx.moveTo(98, 69);
		ctx.lineTo(98, 83);
		ctx.lineTo(73, 98); 
		ctx.lineTo(150, 128);
		ctx.lineTo(175, 113);
		ctx.stroke();
		ctx.closePath();

// --------------------------------------------

// Recta derecha superior (1)
ctx.beginPath();
ctx.moveTo(200, 48);
ctx.lineTo(180, 60);
ctx.lineTo(180, 75);
ctx.lineTo(154, 92);
ctx.lineTo(175, 100);
ctx.stroke();
ctx.closePath();

		// linea medio 
		ctx.beginPath();
		ctx.moveTo(178, 75);
		ctx.lineTo(200, 83);
		ctx.stroke();
		ctx.closePath();

		// linea final 
		ctx.beginPath();
		ctx.moveTo(154, 92);
		ctx.lineTo(154, 106);
		ctx.stroke();
		ctx.closePath();

// --------------------------------------------

// Recta izquierda superior (2)

ctx.beginPath();
ctx.moveTo(163, 35);
ctx.lineTo(140, 47);
ctx.lineTo(140, 60);
ctx.lineTo(115, 77); 
ctx.lineTo(115, 90);
ctx.lineTo(163, 35);
ctx.stroke();
ctx.closePath();

		// cuadrado 1 recta 
		ctx.beginPath();
		ctx.moveTo(122, 53); 
		ctx.lineTo(122, 40);
		ctx.lineTo(140, 48);
		ctx.stroke();
		ctx.closePath();

		// linea medio (0.1)
		ctx.beginPath();
		ctx.moveTo(140, 60);
		ctx.lineTo(122, 53);
		ctx.stroke();
		ctx.closePath();

		// linea medio (0.2)
		ctx.beginPath();
		ctx.moveTo(117, 77);
		ctx.lineTo(98, 69);
		ctx.lineTo(123, 53);
		ctx.stroke();
		ctx.closePath();

// --------------------------------------------

// Bases cuadro medio

// izq
ctx.beginPath();
ctx.moveTo(110, 107);
ctx.lineTo(110, 94);
ctx.lineTo(97, 102);
ctx.stroke();
ctx.closePath();

// der
ctx.beginPath();
ctx.moveTo(148, 109);
ctx.lineTo(134, 117);
ctx.stroke();
ctx.closePath();


// cuadro medio linea superior (1)
ctx.beginPath();
ctx.moveTo(110, 94);
ctx.lineTo(148, 109);
ctx.stroke();
ctx.closePath();

// cuadro medio linea inferior (2)
ctx.beginPath();
ctx.moveTo(97, 102);
ctx.lineTo(134, 117);
ctx.stroke();
ctx.closePath();

// }



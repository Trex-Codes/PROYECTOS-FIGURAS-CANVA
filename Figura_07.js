// FIGURA
// function ViewFigure2(){

	var canvas = document.getElementById('CanvSect7');
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
ctx.lineTo(220, 40); // linea 90° derecha 
ctx.lineTo(200, 52); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 40); // linea 90° izquierda
ctx.lineTo(70, 50);
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 40); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 10); 
ctx.stroke();
ctx.closePath();

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(120, 10);
ctx.lineTo(50, 40); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// --------------------------------------------


// linea lateral 180 (abajo - arriba) (1)
ctx.beginPath();
ctx.moveTo(150, 130);
ctx.lineTo(179, 112);

ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea lateral 90 superior (1)
ctx.beginPath();
ctx.moveTo(200, 75);
ctx.lineTo(200, 52);
ctx.lineTo(125, 27);
ctx.stroke();
ctx.closePath();

// linea lateral 90 superior (2)
ctx.beginPath();
ctx.moveTo(179, 112);
ctx.lineTo(179, 90);
ctx.lineTo(100, 60);
ctx.lineTo(100, 80);
ctx.stroke();
ctx.closePath();

// cuadro 3 
ctx.beginPath();
ctx.moveTo(100, 60);
ctx.lineTo(125, 48);
ctx.lineTo(200, 75);
ctx.lineTo(177, 91);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea frontal 90  (1)
ctx.beginPath();
ctx.moveTo(70, 95);
ctx.lineTo(70, 50);
ctx.lineTo(125, 26);
ctx.lineTo(125, 67);
ctx.lineTo(70, 95);
ctx.stroke();
ctx.closePath();

// liena 180 frontal (abajo - izquierda) (1)
ctx.beginPath();
ctx.moveTo(70, 95);
ctx.lineTo(150, 130);
ctx.stroke();
ctx.closePath();

// medio cuadro 1-2 
ctx.beginPath();
ctx.moveTo(179, 112);
ctx.lineTo(100, 80);
ctx.stroke();
ctx.closePath();

// --------------------------------------------
 // cuadro pequeño 
 ctx.beginPath();
 ctx.moveTo(85, 55);
 ctx.lineTo(65, 45);
 ctx.lineTo(65, 33);
 ctx.lineTo(85, 43);
 ctx.lineTo(85, 55);
 ctx.lineTo(108, 45);
 ctx.lineTo(108, 33);
 ctx.lineTo(87, 24);
 ctx.lineTo(87, 37);
 ctx.lineTo(108, 45);
 ctx.stroke();
 ctx.closePath();

 // corte atras cuadro pequeño 
 ctx.beginPath();
 ctx.moveTo(87, 37);
 ctx.lineTo(65, 45);
 ctx.stroke();
ctx.closePath();
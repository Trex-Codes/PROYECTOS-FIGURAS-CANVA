// FIGURA
// function ViewFigure13(){

	var canvas = document.getElementById('CanvSect13');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.moveTo(150, 127);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(162, 137);
ctx.stroke();
ctx.closePath();

// union derecha base 
ctx.beginPath();
ctx.moveTo(193, 45);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(220, 100);
ctx.lineTo(180, 125);
ctx.stroke();
ctx.closePath();

// lateral cierre cuadrado atras 
ctx.beginPath();
ctx.moveTo(180, 125);
ctx.lineTo(115, 98);
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Linea izquierda (BASE CUBO)
ctx.lineTo(50, 105);
ctx.lineTo(50, 79);
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(168, 37);
ctx.lineTo(125, 20); 
ctx.lineTo(65, 53);
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(70, 95); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 128);
ctx.lineTo(162, 120); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.lineTo(162, 138);
ctx.stroke();
ctx.closePath();

// cubo frontal inferior 
ctx.beginPath();
ctx.moveTo(162, 120); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.lineTo(85, 88);
ctx.lineTo(70, 95);
ctx.stroke();
ctx.closePath();

// linea 90 cubo inferior 
ctx.beginPath();
ctx.moveTo(85, 88);
ctx.lineTo(85, 60);
ctx.lineTo(65, 52);
ctx.stroke();
ctx.closePath();

// cuadro izquierdo acostado
ctx.beginPath();
ctx.moveTo(85, 80);
ctx.lineTo(65, 72);
ctx.lineTo(65, 53);
ctx.stroke();
ctx.closePath();
// --------------------------------------------

// Linea 90 derecha - izquierda (1)
ctx.beginPath();
ctx.moveTo(220, 55);
ctx.lineTo(205, 65);
ctx.lineTo(205, 78);
ctx.lineTo(190, 87);
ctx.stroke();
ctx.closePath();

// Linea 90 derecha - izquierda (1)
ctx.beginPath();
ctx.moveTo(190, 87);
ctx.lineTo(190, 95);
ctx.lineTo(180, 101);
ctx.stroke();
ctx.closePath();

// Linea 90 derecha - izquierda (1)
ctx.beginPath();	
ctx.moveTo(180, 100);
ctx.lineTo(180, 126);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea 90 izquierda borde (1)
ctx.beginPath();
ctx.lineTo(70, 85);
ctx.lineTo(70, 95);
ctx.stroke();
ctx.closePath();

// linea 90 izquierda borde (1)
ctx.beginPath();
ctx.moveTo(168, 36);
ctx.lineTo(150, 47);
ctx.lineTo(125, 38); 
ctx.lineTo(85, 60); 
ctx.stroke();
ctx.closePath();

// linea medio atras superior 
ctx.beginPath();
ctx.moveTo(205, 65);
ctx.lineTo(175, 55); 
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Cuadro derecho superior 
ctx.beginPath();
ctx.moveTo(205, 78);
ctx.lineTo(175, 68);
ctx.lineTo(175, 55);
ctx.lineTo(193, 45);
ctx.stroke();
ctx.closePath();

// triangulo superior (1)
ctx.beginPath();
ctx.moveTo(125, 38);
ctx.lineTo(108, 57);
ctx.stroke(); 
ctx.closePath();

// triangulo superior (2)
ctx.beginPath();
ctx.moveTo(150, 47);
ctx.lineTo(135, 67);
ctx.lineTo(167, 50);
ctx.lineTo(168, 37);
ctx.stroke();	
ctx.closePath();

// linea atras triangulo 
ctx.beginPath();
ctx.moveTo(167, 50);
ctx.lineTo(178, 54);
ctx.stroke();
ctx.closePath();

// Linea superior - inferior (bases) (2)
ctx.beginPath();
ctx.moveTo(190, 87);
ctx.lineTo(108, 57);
ctx.stroke();
ctx.closePath();

// linea superior - inferior (bases) (3)
ctx.beginPath();
ctx.moveTo(190, 95);
ctx.lineTo(108, 65);
ctx.stroke();
ctx.closePath();

// Linea corte lateral 
ctx.beginPath();
ctx.moveTo(109, 58);
ctx.lineTo(109, 67);
ctx.lineTo(85, 80);
ctx.stroke();
ctx.closePath();

// linea superior - inferior (bases) (4)
ctx.beginPath();
ctx.moveTo(180, 100);
ctx.lineTo(115, 77);
ctx.lineTo(102, 85);
ctx.lineTo(85, 78);
ctx.lineTo(70, 86);
ctx.lineTo(50, 79);
ctx.lineTo(67, 71);
ctx.stroke();
ctx.closePath();

// Linea medio parte frontal (90)
ctx.beginPath();
ctx.moveTo(102, 85);	
ctx.lineTo(102, 95);
ctx.stroke();
ctx.closePath();

// linea medio hueco 
ctx.beginPath();
ctx.moveTo(115, 77);
ctx.lineTo(115, 100);
ctx.stroke();
ctx.closePath();
// }
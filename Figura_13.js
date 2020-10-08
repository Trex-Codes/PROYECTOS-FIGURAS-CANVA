// FIGURA
// function ViewFigure13(){

	var canvas = document.getElementById('CanvSect13');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.moveTo(150, 100);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.lineTo(50, 60); // linea 90° izquierda
ctx.lineTo(150, 100); // conectores linea central superior
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
ctx.moveTo(70, 95); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(160, 123); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.lineTo(160, 138);
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
ctx.lineTo(175, 104);
ctx.stroke();
ctx.closePath();

// Linea 90 derecha - izquierda (1)
ctx.beginPath();	
ctx.moveTo(175, 104);
ctx.lineTo(175, 130);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea 90 izquierda borde
ctx.beginPath();
ctx.moveTo(70, 68);
ctx.lineTo(70, 95);
ctx.stroke();
ctx.closePath();































































// }
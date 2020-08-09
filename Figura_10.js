// FIGURA
// function ViewFigure9(){

	var canvas = document.getElementById('CanvSect10');
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

// // linea inferior cara #2 - #3
// ctx.beginPath();
// ctx.moveTo(50, 85); // Linea barra Base 2.0 Izquierda 
// ctx.lineTo(150, 130);
// ctx.lineTo(220, 85); // Linea barra base 2.0 (Vista  frontal- lateral)
// ctx.stroke();
// ctx.closePath();

	

// --------------------------------------------

// }
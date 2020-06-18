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

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
// ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 105);
ctx.lineTo(50, 60); // linea 90° izquierda
// ctx.lineTo(150, 100); // conectores linea central superior
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 55); // Linea atras Union Cubo (SUPERIOR)
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
ctx.lineTo(120, 20);
ctx.lineTo(50, 60); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

//  LINEAS INFERIORES (LATERAL - FRONTAL)
ctx.beginPath();
ctx.moveTo(50, 90); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(220, 85); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Linea medio (VISTA LATERAL)
ctx.beginPath();
ctx.moveTo(195, 115);
ctx.lineTo(195, 70);
ctx.lineTo(95, 35);
ctx.lineTo(95, 65);
ctx.lineTo(50, 90);
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

// LINEA MEDIO BASE INFERIOR (2)
ctx.beginPath();
ctx.moveTo(180, 110);
ctx.lineTo(79, 75);
ctx.stroke();
ctx.closePath();

// LINEA (VISTA SUPERIOR) (1)
ctx.beginPath();
ctx.moveTo(195, 47);
ctx.lineTo(165, 62);
ctx.lineTo(160, 103);
ctx.lineTo(130, 122);
ctx.lineTo(130, 137);
ctx.stroke();
ctx.closePath();
				// LINEA PARTE DERECHA 
				ctx.beginPath();
				// ctx.moveTo(185, );
				// ctx.lineTo(X, Y);
				ctx.stroke();
				ctx.closePath();

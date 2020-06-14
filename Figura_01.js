var canvas  = document.getElementById('CanvSect1');
var ctx = canvas.getContext('2d');

// linea cental - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(150, 130);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.lineTo(190, 75	); // conectores linea central superior
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
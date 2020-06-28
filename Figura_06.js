// FIGURA 
function ViewFigure6(){

	var canvas = document.getElementById('CanvSect6');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);


// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 100);
ctx.lineTo(220, 55); // linea 90° derecha 
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 100);
ctx.stroke();
ctx.closePath();	

// --------------------------------------------
			// BASES CUADRICULA
// LINEAS 90 GRADOS (IZQ - DER)

// linea 1
ctx.beginPath();
ctx.lineTo(72, 60);
ctx.lineTo(72, 75);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea base
ctx.beginPath();
ctx.moveTo(150, 145);
ctx.lineTo(170, 117);
ctx.lineTo(170, 102);
ctx.lineTo(190, 90);
ctx.lineTo(190, 75);
ctx.lineTo(220, 55);
ctx.stroke();
ctx.closePath();

// linea frontal rampa 
ctx.beginPath();
ctx.moveTo(170, 118);
ctx.lineTo(72, 75);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.closePath();

// liena caudro 1 
ctx.beginPath();
ctx.moveTo(170, 102);
ctx.lineTo(72, 60);
ctx.lineTo(95, 50);
ctx.stroke();
ctx.closePath();

// linea cuadro 2
ctx.beginPath();
ctx.moveTo(190, 90);
ctx.lineTo(95, 50);
ctx.stroke();
ctx.closePath();

// linea cuadro 3
ctx.beginPath();
ctx.moveTo(190, 75);
ctx.lineTo(95, 35);
ctx.lineTo(95, 50);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// linea medio ultimo cuadro
ctx.beginPath();
ctx.moveTo(205, 65);
ctx.lineTo(112, 27);
ctx.stroke();
ctx.closePath();
 
// cuadrado izquierda
ctx.beginPath();
ctx.moveTo(95, 35);
ctx.lineTo(125, 20);
ctx.stroke();

// --------------------------------------------

// parte derecha puentes 

// puente 1
ctx.beginPath();
ctx.moveTo(220, 55);
ctx.lineTo(170, 20);
ctx.lineTo(145, 30);
ctx.lineTo(205, 65);
ctx.stroke();
ctx.closePath();

// puente 2 
ctx.beginPath();
ctx.moveTo(125, 20);
ctx.lineTo(170, 20);
ctx.stroke();
ctx.closePath();

		// conector puente 2 
		ctx.beginPath();
		ctx.moveTo(112, 27);
		ctx.lineTo(145, 30);
		ctx.stroke();
		ctx.closePath();

// --------------------------------------------

// triangulo rampa (DERECHA)
ctx.beginPath();
ctx.moveTo(100, 87);
ctx.lineTo(100, 72);
ctx.lineTo(70, 110);
ctx.lineTo(100, 87);
ctx.stroke();
ctx.closePath();

// triangulo rampa (IZQUIERDO)
ctx.beginPath();
ctx.moveTo(72, 76);
ctx.lineTo(73, 60);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.closePath();
}
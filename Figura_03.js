// ------------------ CUBO BASE BASICA ------------------

// FIGURA
function ViewFigure2(){

	var canvas = document.getElementById('CanvSect3');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// // linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(220, 100);
ctx.lineTo(220, 85);
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.lineTo(75, 112);
ctx.lineTo(50, 100);
ctx.lineTo(50, 75); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(95, 35);
ctx.lineTo(75, 46); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

//  liena 90° vista frontal
ctx.beginPath();
ctx.moveTo(120, 45);
ctx.lineTo(102, 56);
ctx.stroke();
ctx.closePath();


// liena 90 izquierda 
ctx.beginPath();
ctx.moveTo(75, 112);
ctx.lineTo(75, 85);
ctx.stroke();
ctx.closePath();
// --------------------------------------------

// linea triangulo superior (1)
ctx.beginPath();
ctx.moveTo(75, 97);
ctx.lineTo(220, 85);
ctx.lineTo(120, 60);
ctx.stroke();
ctx.closePath();

// linea triangulo Inferior (2)
ctx.beginPath();
ctx.moveTo(75, 112);
ctx.lineTo(220, 100);
ctx.stroke();
ctx.closePath();

 // corte cuadro Vista (SUPERIOR)
 ctx.beginPath();
 ctx.moveTo(95, 35);
 ctx.lineTo(120, 45);
 ctx.lineTo(120, 75);
 ctx.lineTo(75, 96);
 ctx.stroke();
 ctx.closePath();

 // cuadrado bajado
 ctx.beginPath();
 ctx.moveTo(75, 46);
 ctx.lineTo(102, 56);
 ctx.lineTo(75, 85);
 ctx.lineTo(50, 75);
 ctx.lineTo(75, 46);
 ctx.stroke();
 ctx.closePath();
}

// VISTA SUPERIOR
// function ViewVist_Sup03(){
	
  var canvas = document.getElementById('CanvSect1');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

	// PLANO PRINCIPAL
	ctx.beginPath();
	ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
	ctx.strokeRect(25, 15, 250, 120);
	ctx.closePath();
// }
// FIGURA
function ViewFigure11(){

	var canvas = document.getElementById('CanvSect11');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.moveTo(150, 130);
ctx.lineTo(150, 145);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea derecha central - CUBO 
ctx.beginPath();
ctx.moveTo(150, 145); // Linea derecha (BASE CUBO)
ctx.lineTo(220, 110);
ctx.lineTo(220, 60); // linea 90° derecha 
ctx.stroke();
ctx.closePath();

// linea izquierda central - CUBO
ctx.beginPath();
ctx.moveTo(150, 145); // Liena izquierda (BASE CUBO)
ctx.lineTo(50, 105);
ctx.lineTo(50, 75); // linea 90° izquierda
ctx.stroke();
ctx.closePath();	

// linea atras derecha - (BASE CUBO)
ctx.beginPath();
ctx.moveTo(220, 60); // Linea atras Union Cubo (SUPERIOR)
ctx.lineTo(120, 20); 
ctx.lineTo(107, 27);
ctx.stroke();
ctx.closePath();

// Linea corte derecha arriba 
ctx.beginPath();
ctx.moveTo(220, 60);
ctx.lineTo(200, 70);
ctx.stroke();
ctx.closePath();


// cuadro izquierdo completo
ctx.beginPath();
ctx.lineTo(145, 68);
ctx.lineTo(107, 53); 
ctx.lineTo(50, 75); // Conector base Arriba - Base Abajo 
ctx.stroke();
ctx.closePath();

// linea inferior cara #2 - #3
ctx.beginPath();
ctx.moveTo(50, 76);
ctx.lineTo(70, 85);
ctx.lineTo(70, 98); // Linea barra Base 2.0 Izquierda 
ctx.lineTo(150, 130);
ctx.lineTo(200, 105); // Linea barra base 2.0 (Vista  frontal- lateral)
ctx.lineTo(200, 70);
ctx.lineTo(145, 50);
ctx.lineTo(154, 45);
ctx.lineTo(107, 27);
ctx.lineTo(107, 53); // Linea 90 
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// Liena corte medio (90)
ctx.beginPath();
ctx.moveTo(145, 50);
ctx.lineTo(145, 68);
ctx.stroke();
ctx.closePath();

// cuadro menor izquierda 
ctx.beginPath();
ctx.moveTo(70, 98);
ctx.lineTo(91, 89);
ctx.stroke();
ctx.closePath();

// liena corte medio (Division central)
ctx.beginPath();
ctx.lineTo(91, 75);
ctx.lineTo(70, 85);
ctx.stroke();
ctx.closePath();

// Linea corte medio
ctx.beginPath();
ctx.moveTo(200, 105);
ctx.lineTo(165, 93);
ctx.stroke();
ctx.closePath();

// --------------------------------------------

// cubo
ctx.beginPath();
ctx.moveTo(137, 107);
ctx.lineTo(137, 80);
ctx.lineTo(90, 62);
ctx.lineTo(120, 50);
ctx.lineTo(165, 67);
ctx.lineTo(165, 93);
ctx.lineTo(137, 107);
ctx.lineTo(90, 89);
ctx.lineTo(90, 62);
ctx.stroke();
ctx.closePath();

// cubo corte
ctx.beginPath();
ctx.moveTo(137, 80);
ctx.lineTo(165, 67);
ctx.stroke();	
ctx.closePath();
}

// VISTA SUPERIOR
// function ViewVist_Sup11() {

	var canvas = document.getElementById('CanvSect11');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ---------- SECCION DERECHA ---------- 

// Parte inferior 
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.moveTo(275, 45);
ctx.lineTo(275, 135);
ctx.lineTo(225, 135);
ctx.lineTo(75, 135);
ctx.lineTo(75, 105);
ctx.lineTo(75, 105);
ctx.lineTo(225, 105);
ctx.lineTo(225, 45);
ctx.lineTo(275, 45);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// ---------- SECCION SUPERIOR ---------- 

// parte superior 
ctx.beginPath();
ctx.fillStyle = "rgba(250, 250, 4, 0.7)";
ctx.moveTo(275, 135);
ctx.lineTo(275, 15);
ctx.lineTo(25, 15);
ctx.lineTo(25, 25);
ctx.lineTo(150, 25);
ctx.lineTo(150, 45);
ctx.lineTo(275, 45);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// ---------- SECCION SUPERIOR ---------- 

// Parte Izquierda
ctx.beginPath();
ctx.fillStyle = 'lightgreen';
ctx.moveTo(25, 25);
ctx.lineTo(25, 135);
ctx.lineTo(75, 135);
ctx.lineTo(75, 45);
ctx.lineTo(150, 45);
ctx.lineTo(150, 25);
ctx.lineTo(25, 25);
ctx.stroke();
ctx.fill();

	// ---------- SECCION SUPERIOR ---------- 

// cuadro medio
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
ctx.fillRect(75, 45, 150, 60);
ctx.strokeRect(75, 45, 150, 60);
ctx.stroke();
ctx.fill();
ctx.closePath();
// }


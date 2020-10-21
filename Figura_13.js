// FIGURA
function ViewFigure13(){

	var canvas = document.getElementById('CanvSect13');
	var ctx = canvas.getContext('2d');
  
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

// linea cental - (BASE CUBO)
ctx.beginPath();
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
}

// VISTA SUPERIOR
function ViewVist_Sup13(){

	var canvas = document.getElementById('CanvSect13');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION INFERIOR ---------- 

// cuadro izquierdo
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.fillRect(25, 105, 50, 30);
ctx.strokeRect(25, 105, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro medio largo 
ctx.beginPath();
ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
ctx.fillRect(75, 105, 200, 30);
ctx.strokeRect(75, 105, 200, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION LATERAL IZQUIERDA ---------- 

// figura izquierda
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.moveTo(25, 105);
ctx.lineTo(25, 15);
ctx.lineTo(125, 15);
ctx.lineTo(125, 45);
ctx.lineTo(75, 45);
ctx.lineTo(75, 105);
ctx.lineTo(25, 105);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION LATERAL DERECHA ---------- 

// cuadro extremo derecho
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(225, 15, 50, 30);
ctx.strokeRect(225, 15, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION MEDIO  ---------- 

// figura medio 
ctx.beginPath();
ctx.fillStyle = "rgba(164, 219, 36, 0.7)";
ctx.moveTo(125, 105);
ctx.lineTo(125, 75);
ctx.lineTo(275, 75);
ctx.lineTo(275, 60);
ctx.lineTo(75, 60);
ctx.lineTo(75, 105);
ctx.lineTo(125, 105);
ctx.stroke();
ctx.fill();
ctx.closePath();
// }	

// cuadro (rampa)
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(75, 45, 50, 15);
ctx.strokeRect(75, 45, 50, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

// figura superior - medio
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.moveTo(275, 45);
ctx.lineTo(275, 60);
ctx.lineTo(125, 60);
ctx.lineTo(125, 15);
ctx.lineTo(225, 15);
ctx.lineTo(225, 45);
ctx.lineTo(275, 45);
ctx.stroke();
ctx.fill();
ctx.closePath();
}

// VISTA FRONTAL
function ViewVist_Front13(){

	var canvas = document.getElementById('CanvSect13');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION INFERIOR  ---------- 

// forma base inferior 
ctx.beginPath();
ctx.fillStyle = "lightgreen";
ctx.moveTo(25, 75);
ctx.lineTo(25, 135);
ctx.lineTo(275, 135);
ctx.lineTo(275, 105);
ctx.lineTo(75, 105);
ctx.lineTo(75, 75);
ctx.lineTo(25, 75);
ctx.stroke();	
ctx.fill();
ctx.closePath();

// ---------- SECCION MEDIO  ---------- 

// cuadro izquierdo pequeño
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.fillRect(75, 75, 50, 29);
ctx.strokeRect(75, 75, 50, 29);
ctx.stroke();	
ctx.fill();
ctx.closePath();	

// Cuadro derecho largo
ctx.beginPath();
ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
ctx.fillRect(125, 75, 150, 29);
ctx.strokeRect(125, 75, 150, 29);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro largo total superior 
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.fillRect(75, 45, 200, 29);
ctx.strokeRect(75, 45, 200, 29);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION IZQUIERDA  ---------- 

// cuadro lateral izquierdo
ctx.beginPath();
ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
ctx.fillRect(25, 15, 50, 60);
ctx.strokeRect(25, 15, 50, 60);
ctx.stroke();
ctx.closePath();

// ---------- SECCION SUPERIOR  ---------- 

// cuadro superior (1)
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(75, 15, 50, 30);
ctx.strokeRect(75, 15, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro superior (2)
ctx.beginPath();
ctx.fillStyle = "lightgreen";
ctx.fillRect(225, 15, 50, 30);
ctx.strokeRect(225, 15, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();
}

// VISTA LATERAL
function ViewVist_Lat13(){

	var canvas = document.getElementById('CanvSect13');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// ---------- SECCION LATERAL IZQUIERDA ---------- 

// cuadro inferior (1)
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.fillRect(25, 105, 50, 30);
ctx.strokeRect(25, 105, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro inferior (2)
ctx.beginPath();
ctx.fillStyle = "rgba(255, 229, 0, 0.7)";
ctx.fillRect(25, 75, 50, 30);
ctx.strokeRect(25, 75, 50, 30);
ctx.stroke();
ctx.fill();
ctx.closePath();

// cuadro lateral (vacio)
ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(75, 75, 50, 60);
ctx.strokeRect(75, 75, 50, 60);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION LATERAL DERECHA ---------- 

// figura lateral escalera
ctx.beginPath();
ctx.fillStyle = "rgba(249, 16, 16, 0.7)";
ctx.moveTo(125, 75);
ctx.lineTo(175, 75);
ctx.lineTo(175, 60);
ctx.lineTo(225, 60);
ctx.lineTo(225, 15);
ctx.lineTo(275, 15);
ctx.lineTo(275, 135);
ctx.lineTo(125, 135);
ctx.lineTo(125, 75);
ctx.stroke();
ctx.fill();
ctx.closePath();

// ---------- SECCION SUPERIOR ---------- 

// triangulo superior
ctx.beginPath();
ctx.fillStyle = "rgba(240, 235, 234, 0.9)";
ctx.moveTo(225, 15);
ctx.lineTo(225, 60);
ctx.lineTo(175, 60);
ctx.lineTo(225, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();

// forma lateral izquierda 
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.moveTo(225, 15);
ctx.lineTo(175, 60);
ctx.lineTo(175, 75);
ctx.lineTo(75, 75);
ctx.lineTo(75, 15);
ctx.lineTo(225, 15);
ctx.stroke();
ctx.fill();
ctx.closePath();
}
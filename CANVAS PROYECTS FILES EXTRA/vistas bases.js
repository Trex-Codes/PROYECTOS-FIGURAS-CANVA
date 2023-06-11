// VISTAS ------------------------------
	var canvas = document.getElementById('CanvSect3');
  	var ctx = canvas.getContext('2d');
  
 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// PLANO PRINCIPAL
	ctx.beginPath();
	ctx.fillStyle = 'rgba(240, 235, 234, 0.9)';
	ctx.strokeRect(25, 15, 250, 120);
	ctx.closePath();

	// Liena 90 izquierda 1
	ctx.beginPath();
	ctx.moveTo(75, 15);
	ctx.lineTo(75, 135);
	ctx.stroke();
	ctx.closePath();

	// liena 90 izquierda 2 
	ctx.beginPath();
	ctx.moveTo(125, 15);
	ctx.lineTo(125, 135);
	ctx.stroke();
	ctx.closePath();

	// Linea izquierda 3
	ctx.beginPath();
	ctx.moveTo(175, 15);
	ctx.lineTo(175, 135);
	ctx.stroke();
	ctx.closePath();

	// linea izquierda 4
	ctx.beginPath();
	ctx.moveTo(225, 15);
	ctx.lineTo(225, 135);
	ctx.stroke();
	ctx.closePath();
// ----------------------------

	// linea inferior 1
	ctx.beginPath();
	ctx.moveTo(25, 45);
	ctx.lineTo(275, 45);
	ctx.stroke();
	ctx.closePath();

	// linea inferior 2 
	ctx.beginPath();
	ctx.moveTo(25, 75);
	ctx.lineTo(275, 75);
	ctx.stroke();
	ctx.closePath();

	// linea inferior 3 
	ctx.beginPath();
	ctx.moveTo(25, 105);
	ctx.lineTo(275, 105);
	ctx.stroke();
	ctx.closePath();

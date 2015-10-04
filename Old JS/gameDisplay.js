/**
*@param {htmlCanvas} subGame The canvas that 
*/
function drawSubBoard(subGame) {
	var context = subGame.getContext('2d');
	context.beginPath();
	context.moveTo(subGame.width/60,subGame.height/3);
	context.lineTo(subGame.width/1.017,subGame.height/3);
	
	context.moveTo(subGame.width/60,subGame.height/1.5);
	context.lineTo(subGame.width/1.017,subGame.height/1.5);
	
	context.moveTo(subGame.width/3,subGame.height/60);
	context.lineTo(subGame.width/3,subGame.height/1.017);
	
	context.moveTo(subGame.width/1.5,subGame.height/60);
	context.lineTo(subGame.width/1.5,subGame.width/1.017)
	
	context.lineWidth = subGame.width/60;
    context.strokeStyle = '#000000';
	context.stroke();
}
/**
*This function draws an X or an O in the appropriate position of the canvas
*@param {htmlCanvas} subGame The canvas corresponding to the subGame where the mark will be made
*@param {int} xPos The x coordinate position on the canvas
*@param {int} yPos The y coordinate position on the canvas
*@param {int} turn The current turn; X is 1, O is 2
*/
function markSquare(subGame, xPos, yPos, turn) {
	var size = 0;
	if (turn == 1)
	{
		size = subGame.width/3 - 2;
		drawX(subGame, xPos, yPos, 0);
	}
	else if (turn == 2)
	{
		size = subGame.width/6;
		drawO(subGame, (xPos - 5) + size, (yPos - 5) + size, 0);
	}
	
}

/**
*This function draws an X or an O over the entire canvas, which signifies that the subgame
*is over and the X or O player won
*@param {HTMl Canvas} subGame The canvas corresponding to the sub game where the mark will be made
*@param {int} turn The current turn; 1 - X, 2 - O
*/
function markCanvas(subGame, turn) {
	//alert("gameDisplay - markCanvas(). turn: " + turn);
	if (turn == 1)
	{
		drawX(subGame, 5, 5, 1);
	}	
	else if (turn == 2)
	{
		drawO(subGame, subGame.width/2, subGame.height/2, 1);
	}

}


//size: 0 - small, 1 - big
function drawO(canvas, xPos, yPos, type) {
	var size = 0;
	if (type == 0)
		size = canvas.width/6 - 5;
	else if (type == 1)
		size = canvas.width/2 - 5;
		

	var context = canvas.getContext('2d');
    var centerX = xPos;
    var centerY = yPos;
    var radius = size;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    if (type == 0)
    	context.lineWidth = 2;
    else if (type == 1)
    	context.lineWidth = 5;
    context.strokeStyle = '#cc2121';
    context.stroke();
}

function drawX(canvas, xPos, yPos, type) {
	//if (type == 1)
	//	alert("gameDisplay - drawX(). type is 1");
	var size = 0;
	if (type == 0)
		size = canvas.width/3 - 10;
	else if (type == 1)
	{
		size = canvas.width - 5;
		//alert("gameDisplay - drawX(). type is 1. size: " + size + "x: " + xPos + " y: " + yPos);
	}

	var context = canvas.getContext('2d');
	context.beginPath();
	context.moveTo(xPos,yPos);
	context.lineTo(xPos + size, yPos + size);
	context.moveTo(xPos + size, yPos);
	context.lineTo(xPos, yPos + size);
	if (type == 0) 
    	context.lineWidth = 2;
    else if (type == 1)
    	context.lineWidth = 5;    
    context.strokeStyle = '#2121cc';
	context.stroke();
}

/**
*@param {HTML Canvas} c1 Canvas to color
*@param {HTML Canvas} c2 Canvas to color
*@param {HTML Canvas} c3 Canvas to color
*@param {int} player 1 - X - Blue, 2 - O - Red
*/
function colorSquares(c, player)
{
	var color;
	if (player == 1)
		color = "Blue";
	else
		color = "Red";
		
	for (i = 0; i < c.length; i++)
	{
		c[i].style.backgroundColor = color;
	}
	

}

function clearCanvas() {
	var canvas = document.getElementById('f11');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f12');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f13');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f21');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f22');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f23');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f31');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f32');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var canvas = document.getElementById('f33');
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
}
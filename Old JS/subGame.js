/**
* @param {int} id The id for this subgame (0-8)
* @param {HTML Canvas} canvas The canvas corresponding to this subgame
*/
function subGame(id, canvas)
{
	this.id = id;
	this.canvas = canvas;
	this.gameOver = false;
	var idArray = [0,0,0,0,0,0,0,0,0]; //0 - empty, 1 - X, 2 - O
	this.active = true;
	this.winner = 0; // 0 - game not over, 1 - X won, 2 - O won, 3 - tie

	drawSubBoard(canvas);
	
	/**
	* @param {int} playerId The id of the player. 1 - X  2 - O
	* @param {int} squareId The id for the square that the move was played 0-8
	* @return {boolean} did the move go through or not
	*/
	this.movePlayed = function(playerId, squareId, xPos, yPos)
	{
		//alert("Active: " + this.active + " GameOver: " + gameOver + " Winner: " + this.winner);
		if (!this.active || this.gameOver) return false;
		
		if (idArray[squareId] == 0) {
			markSquare(this.canvas, xPos, yPos, playerId);
		}
		idArray[squareId] = playerId;
		
		this.detectGameOver();
		
		return true;
		
	}
	
	this.detectGameOver = function()
	{
		//alert(idArray);
		//horizontal row 1 win check
		if (idArray[0] != 0 && idArray[0] == idArray[1] && idArray[0] == idArray[2]) {
			//alert("detect 1");
			this.winner = idArray[0];
		}
		//horizontal row 2 win check
		else if (idArray[3] != 0 && idArray[3] == idArray[4] && idArray[3] == idArray[5]) {
			//alert("detect 2");
			this.winner = idArray[3];
		}
		//horizontal row 3 win check
		else if (idArray[6] != 0 && idArray[6] == idArray[7] && idArray[6] == idArray[8]) {
			//alert("detect 3");
			this.winner = idArray[6];
		}
		//vertical column 1 win check
		else if (idArray[0] != 0 && idArray[0] == idArray[3] && idArray[0] == idArray[6]) {
			//alert("detect 4");
			this.winner = idArray[0];
		}
		//vertical column 2 win check
		else if (idArray[1] != 0 && idArray[1] == idArray[4] && idArray[1] == idArray[7]) {
			//alert("detect 5");
			this.winner = idArray[1];
		}
		//vertical column 3 win check
		else if (idArray[2] != 0 && idArray[2] == idArray[5] && idArray[2] == idArray[8]) {
			//alert("detect 6");
			this.winner = idArray[2];
		}
		//diagonal starting from top left win check
		else if (idArray[0] != 0 && idArray[0] == idArray[4] && idArray[0] == idArray[8]) {
			//alert("detect 7");
			this.winner = idArray[0];
		}
		//diagonal starting from top right win check
		else if (idArray[2] != 0 && idArray[2] == idArray[4] && idArray[2] == idArray[6]) {
			//alert("detect 8");
			this.winner = idArray[2];
		}

		var boardFull = true;
		
		for (i = 0; i < 9; i++)
		{
			if (idArray[i] == 0)
			{
				boardFull = false;
				break;
			}	
		}
		//alert("subGame - before this.winner == 0 if statement: " + this.winner);
		if (this.winner == 0)
		{
			if (boardFull) {
				this.winner = 3;
			}
			else {
				return;
			}
		}
		//alert("subGame - after this.winner == 0 if statement");

		this.setInactive();
		this.gameOver = true;
		if (this.winner == 1 || this.winner == 2)
			markCanvas(this.canvas, this.winner);
	}
	
	this.setActive = function ()
	{
		if (!this.gameOver)
		{
			this.active = true;
			this.canvas.className = "field";
		}
	}
	
	this.setInactive = function ()
	{
		if (!this.gameOver)
		{
			this.active = false;
			this.canvas.className = "inactive";
		}
		
	}

}
/**
* class
* SubGame class used by the gameModel
* @param {string} id The unique id for the subgame in format r[0-2]c[0-2]
*/
function SubGame(id)
{
	this.id = id; // r[0-2]c[0-2] 
	//this.canvas = canvas;
	this.gameOver = false;
	var idArray = [0,0,0,0,0,0,0,0,0]; //0 - empty, 1 - X, 2 - O
	this.active = true;
	this.winner = 0; // 0 - game not over, 1 - X won, 2 - O won, 3 - tie
    
    /**
	* @param {string} turn Whose turn is it? X or O
	* @param {int} squareId The id for the square that the move was played 0-8
	* @return {boolean} did the move go through or not
	*/
	this.movePlayed = function(turn, squareId)
	{        
		if (this.gameOver || !this.active) return {valid : false};
        
        var moveIsValid = false;
        
        if (turn === 'X') {
            playerId = 1;   
        }
        else {
            playerId = 2;
        }
		
		if (idArray[squareId] == 0) {
            idArray[squareId] = playerId;
            moveIsValid = true;
		}
		
        this.detectGameOver();
		return { valid : moveIsValid,
                 gameEnded : this.gameOver};
		
	}
    
    
	
	this.detectGameOver = function()
	{
        console.log('Detecting game over');
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

        if (this.winner == 0)
		{
			if (boardFull) {
				this.winner = 3;
			}
			else {
				return;
			}
		}

        console.log('It has been detected');
        this.active = false;
		this.gameOver = true;
	}
	
	/*this.setActive = function ()
	{
		if (!this.gameOver)
		{
			this.active = true;
			this.canvas.className = "field";
		}
	}*/
	
	/*this.setInactive = function ()
	{
		if (!this.gameOver)
		{
			this.active = false;
			this.canvas.className = "inactive";
		}
		
	}*/

}
// need global variable for the main game 
//var game = new MainGame();
var subGames = [];


subGames.push(new SubGame(0));
subGames.push(new SubGame(1));
subGames.push(new SubGame(2));
subGames.push(new SubGame(3));
subGames.push(new SubGame(4));
subGames.push(new SubGame(5));
subGames.push(new SubGame(6));
subGames.push(new SubGame(7));
subGames.push(new SubGame(8));

var gameOver = false;


/**
* public
* This function processes moves to determine if the move is valid and if it is
* updates its internal game state
* @param {int}      subgameID   The ID of the subgame/canvas where the move was played
* @param {string}   turn        A string for whose move it is
* @param {int}      squareNum   An int for the square within the subgame where the move was played
* @return {boolean}             Returns whether the move was valid or not
*/
function movePlayed(subgameID, turn, squareNum)
{
    return subGames[subgameID].movePlayed(turn, squareNum);
}

/**
* public
* This function queries the status of a subgame and returns whether it is over and who won or 
* if it was a tie
* @param {int}  subgameID   The ID of the subgame/canvas where the move was played
* @return {int}             0 - still active, 1 - X won, 2 - Y won, 3 - game over in tie 
*/
function getSubGameStatus(subgameID)
{
    return subGames[subgameID].winner;
}


function checkTicTacToes() {
    var winner = 3;
    if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner ==             
        subGames[1].winner && subGames[0].winner == subGames[2].winner) {
		//alert("mainGame - detectGameWin() - win type 1");
		winner = subGames[0].winner;
		//winningSquares = [subGames[0].canvas, subGames[1].canvas, subGames[2].canvas];
	}
	else if (subGames[3].winner != 0 && subGames[3].winner != 3 && subGames[3].winner == 
             subGames[4].winner && subGames[3].winner == subGames[5].winner) {
		//alert("mainGame - detectGameWin() - win type 2");
		winner = subGames[3].winner;
		//winningSquares = [subGames[3].canvas, subGames[4].canvas, subGames[5].canvas];
	}
	else if (subGames[6].winner != 0 && subGames[6].winner != 3 && subGames[6].winner == 
             subGames[7].winner && subGames[6].winner == subGames[8].winner) {
		//alert("mainGame - detectGameWin() - win type 3");
		winner = subGames[6].winner;
		//winningSquares = [subGames[6].canvas, subGames[7].canvas, subGames[8].canvas];
	}
	else if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner == 
             subGames[3].winner && subGames[0].winner == subGames[6].winner) {
		//alert("mainGame - detectGameWin() - win type 4");
		winner = subGames[0].winner;
		//winningSquares = [subGames[0].canvas, subGames[3].canvas, subGames[6].canvas];
	}
	else if (subGames[1].winner != 0 && subGames[1].winner != 3 && subGames[1].winner == 
             subGames[4].winner && subGames[1].winner == subGames[7].winner) {
		//alert("mainGame - detectGameWin() - win type 5");
		winner = subGames[1].winner;
		//winningSquares = [subGames[1].canvas, subGames[4].canvas, subGames[7].canvas];
	}
	else if (subGames[2].winner != 0 && subGames[2].winner != 3 && subGames[2].winner == 
             subGames[5].winner && subGames[2].winner == subGames[8].winner) {
		//alert("mainGame - detectGameWin() - win type 6");
		winner = subGames[2].winner;
		//winningSquares = [subGames[2].canvas, subGames[5].canvas, subGames[8].canvas];
	}
	else if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner == 
             subGames[4].winner && subGames[0].winner == subGames[8].winner) {
		//alert("mainGame - detectGameWin() - win type 7");
		winner = subGames[0].winner;
		//winningSquares = [subGames[0].canvas, subGames[4].canvas, subGames[8].canvas];
	}
	else if (subGames[2].winner != 0 && subGames[2].winner != 3 && subGames[2].winner == 
             subGames[4].winner && subGames[2].winner == subGames[6].winner) {
		//alert("mainGame - detectGameWin() - win type 8");
		winner = subGames[2].winner;
		//winningSquares = [subGames[2].canvas, subGames[4].canvas, subGames[6].canvas];
	}
    return winner;
}

/**
* public
* This function returns the status of the entire game by saying if it is over and who won or
* if the result is a tie
* @return {int}             0 - still active, 1 - X won, 2 - Y won, 3 - game over in tie
*/
function getGameStatus()
{
    var winner = checkTicTacToes();

    if (winner == 3) {
        var xWins = 0;
        var yWins = 0;
        for (s in subGames) {
            if (!s.gameOver) {
                winner = 0;
                break;
            }
            else {
                if (s.winner == 1) {
                    xWins++;
                }
                else if (s.winner == 2) {
                    yWins++;
                }
            }
        }
        if (winner == 3) {
            //all games are over and no one got a tic-tac-toe. 
            //count the games won by each player
            if (xWins > yWins) {
                winner = 1;
            }
            else if (yWins > xWins) {
                winner = 2;
            }
        } 
    }
    
    return winner;
}

function setSubGameActive(id, active) {
        if (subGames[id].gameOver) return false;
        subGames[id].active = active;
        return true;
}

for (var i = 0; i < 9; i++)
    {
        setSubGameActive(i, true);
    }
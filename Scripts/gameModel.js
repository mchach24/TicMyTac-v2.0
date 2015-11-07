// need global variable for the main game 
//var game = new MainGame();
var subGames = [];

/*
subGames.push(new subGame(0, document.getElementById('f11')));
subGames.push(new subGame(1, document.getElementById('f12')));
subGames.push(new subGame(2, document.getElementById('f13')));
subGames.push(new subGame(3, document.getElementById('f21')));
subGames.push(new subGame(4, document.getElementById('f22')));
subGames.push(new subGame(5, document.getElementById('f23')));
subGames.push(new subGame(6, document.getElementById('f31')));
subGames.push(new subGame(7, document.getElementById('f32')));
subGames.push(new subGame(8, document.getElementById('f33')));
*/
var currentTurn = 'X'; 
var gameOver = false;


/**
* public
* This function processes moves to determine if the move is valid and if it is
* updates its internal game state
* @param {string}   canvasID    The ID of the subgame/canvas where the move was played
* @param {string}   turn        A string for whose move it is
* @param {int}      squareNum   An int for the square within the subgame where the move was played
* @return {boolean}             Returns whether the move was valid or not
*/
function movePlayed(canvasID, turn, squareNum)
{
    
}

function getSubGameStatus()
{
    
}

function getGameStatus()
{
    
}
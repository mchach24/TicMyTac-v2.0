var doc = $(document);
var body = $(document.body);
var pageWindow = $(window);

var mainContainerObject = $('#mainContainer');
var gameContainerObject = $('#gameContainer');
var gameRowObject = $('.gameRow');
var subGameObject = $('.subGame');

pageWindow.on('load', updateBoardSize);
pageWindow.on('resize', updateBoardSize);

function updateBoardSize() {
    subGameObject.height(subGameObject.width());
}

/*
* draws an x or o on a subGame or subGame square
* @param {DOM Object} subGame JS (not jQuery) subGame clicked
* @param {string} turn Current turn; 'X' or 'O'
* @param {number} square Optional for the square clicked within subGame
*/
function markBoard(subGame, turn, square) {
    if (turn.toLowerCase() === 'x') 
        drawX(subGame);
    else
        drawO(subGame);
}

function drawX(subGame) {
    var ctx = subGame.getContext('2d');
    
    ctx.fillText('X', 20, 20);
}

function drawO(subGame) {
    var ctx = subGame.getContext('2d');
    
    ctx.fillText('O', 20, 20);
}
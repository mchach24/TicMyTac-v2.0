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

/**
* public func
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

/**
* private func
* draws an x
* @param {DOM Object} subGame JS (not jQuery) subGame clicked
*/
function drawX(subGame) {
    var ctx = subGame.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(5,5);
    ctx.lineTo(subGame.width - 5, subGame.height - 5);
    ctx.moveTo(subGame.width - 5, 5);
    ctx.lineTo(5, subGame.height - 5);
    ctx.stroke();
}

function drawO(subGame) {
    var ctx = subGame.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(subGame.width/2, subGame.height/2, subGame.width/2.25, 0, 2 * Math.PI);
    ctx.stroke();
}
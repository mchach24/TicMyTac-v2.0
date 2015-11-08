var doc = $(document);
var body = $(document.body);
var pageWindow = $(window);

var mainContainerObject = $('#mainContainer');
var gameContainerObject = $('#gameContainer');
var gameRowObject = $('.gameRow');
var subGameObject = $('.subGame');

pageWindow.on('load', setupGame);
pageWindow.on('resize', updateBoardSize);

function setupGame() {
    updateBoardSize();
    drawSubBoard();
}

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

function drawSubBoard() {
    $.each(subGameObject, function() {
        var ctx = $(this)[0].getContext('2d');
        var size = $(this)[0].width;
        var padding = 5;
        
        ctx.moveTo(size / 3, padding);
        ctx.lineTo(size / 3, size - padding);
        
        ctx.moveTo(size / 1.5, padding);
        ctx.lineTo(size / 1.5, size - padding);
        
        ctx.moveTo(padding, size / 3);
        ctx.lineTo(size - padding, size / 3);
        
        ctx.moveTo(padding, size / 1.5);
        ctx.lineTo(size - padding, size / 1.5);
        
        ctx.strokeStyle = '#3E3E3E'
        ctx.stroke();
    });
}

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
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#212121";
    ctx.stroke();
}

function drawO(subGame) {
    var ctx = subGame.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(subGame.width/2, subGame.height/2, subGame.width/2.12, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#212121";
    ctx.stroke();
}
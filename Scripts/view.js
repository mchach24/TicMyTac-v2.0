var doc = $(document);
var body = $(document.body);
var win = $(window);

var mainContainer = $('#mainContainer');
var gameContainer = $('#gameContainer');
var gameRow = $('.gameRow');
var subGame = $('.subGame');

win.on('load', updateBoardSize);
win.on('resize', updateBoardSize);

function updateBoardSize() {
    subGame.height(subGame.width());
    
}

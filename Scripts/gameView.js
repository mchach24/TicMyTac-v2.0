var doc = $(document);
var body = $(document.body);
var pageWindow = $(window);

var mainContainer = $('#mainContainer');
var gameContainer = $('#gameContainer');
var gameRow = $('.gameRow');
var subGame = $('.subGame');

pageWindow.on('load', updateBoardSize);
pageWindow.on('resize', updateBoardSize);

function updateBoardSize() {
    subGame.height(subGame.width());
}
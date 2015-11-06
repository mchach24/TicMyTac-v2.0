// setup/miscellaneous code file

var doc = $(document);
var body = $(document.body);
var win = $(window);

var mainContainer = $('#mainContainer');
var mainRow = $('#mainRow');
var gameContainer = $('#gameContainer');
var gameRow = $('.gameRow');
var subGame = $('.subGame');

var width, twoThirdWidth, oneThirdWidth;

// calls updateBoardSize() 10 milliseconds after the window loads. Etc. for resize.
win.on('load', updateBoardSize);
win.on('resize', updateBoardSize);

function updateBoardSize() {
    body[0].scrollHeight = 0; //[0] used for plain JS DOM object, since .scrollHeight is a JavaScript property, not jQuery
    
    subGame.height(subGame.width());

    
}

/*

game.on('click', function(event) {
    var position;
	var x;
	var y;
	if (event.pageX || event.pageY) {
		x = event.pageX;
		y = event.pageY;
	}
	else {
		x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= game.offset().left + parseInt(game.css("padding-left").replace("px","")); // offest.left() returns padding + width/length; second part removes padding
	y -= game.offset().top + parseInt(game.css("padding-top").replace("px",""));
    console.log("(" + x + "," + y + ")");
    translateToBoardPos(x, y);
});
*/
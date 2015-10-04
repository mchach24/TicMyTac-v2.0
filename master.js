// setup/miscellaneous code

var game = $("#game");
var width, twoThirdWidth, oneThirdWidth;


// jQuery func that acts like object.on(event,callback), but the callback function is called "delay" milliseconds after the event.
$.fn.after = function(event, callback, delay) {
    delay = delay || 0; //If delay is defined, then keep it the same, else set it to 0 milliseconds
    $(this).on(event, function() {
        window.setTimeout(callback, delay); 
    });
};

// calls updateBoardSize() 10 milliseconds after the window loads. Etc. for resize.
$(window).on('load', updateBoardSize);
$(window).after('resize', updateBoardSize, 10);
    
// Sets height equal to width.
function updateBoardSize() {
    var boardWidth = game.width() + "px";
    game.height(boardWidth); // CSS height property
    game.attr("width", boardWidth); // HTML width attribute
    game.attr("height", boardWidth); // HTML height attr
    
    width = game.width(); // (818px) (On 1920x1080 as far as I know)
    
    var remainder = width % 9; //These three lines set width to a multiple of 9, so that both a subgame's width and a square's width are divisible by 3.
    width -= remainder; // (810px)
    game.width(width + "px");       //CSS width property
    game.height(width + "px");      //CSS height property
    game.attr("width", width + "px");  // HTML canvas width attr
    game.attr("height", width + "px");  // HTML canvas height attr
    
    twoThirdWidth = width / 1.5; // (540px)
    oneThirdWidth = width / 3;   // (270px)
    
    drawBoard();
}

function drawBoard() {
    var canvas = game[0]; // jQuery object as vanilla javascript DOM object
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    
    // coordinate1 ordered pair as an array for beginning point, in syntax of [x,y]
    // coordinate2 ending point    
    function drawBoardLine(coordinate1, coordinate2) {
        ctx.moveTo(coordinate1[0], coordinate1[1]);
        ctx.lineTo(coordinate2[0], coordinate2[1]);
    }
    
    drawBoardLine([oneThirdWidth, 0], [oneThirdWidth, width]);
    drawBoardLine([twoThirdWidth, 0], [twoThirdWidth, width]); 
    
    drawBoardLine([0, oneThirdWidth], [width, oneThirdWidth]);
    drawBoardLine([0, twoThirdWidth], [width, twoThirdWidth]);
    
    ctx.fillRect(27,27,216,216);
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}

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

function translateToBoardPos(xOnCanvas, yOnCanvas) {
    var subgameDimension = width / 3; //150 for constant
    var squareDimension = subgameDimension / 3; // 50 for constant
    // subGame 1: (27,27) - (243, 243); 2: (297, 27) - (513, 243); 3: (567, 27) - (783, 243)
    
}
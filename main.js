// setup/miscellaneous code

var canvas = $("#game");

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
    var boardWidth = canvas.width();
    canvas.height(boardWidth + "px");
}

function translateToCoord(xOnCanvas, yOnCanvas) {
    var subgameDimension = canvas.width() / 3;
    var squareDimension = subgameDimension / 3;
    
}

canvas.on('click', translateToCoord);
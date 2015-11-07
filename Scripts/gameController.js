var turn = 'X';

$(document).ready(function() {
    $('.subGame').on('click',function(event) {
        var subGameX = event.pageX - $(this).offset().left;
        var subGameY = event.pageY - $(this).offset().top;
        var element = $(this)[0];
        processClick(element, subGameX, subGameY);
    });
});

function processClick(subGame, x, y) {
    markBoard(subGame, turn); // Defined in gameView.js
    if (turn === 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
}


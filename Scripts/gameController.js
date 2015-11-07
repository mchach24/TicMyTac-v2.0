var turn = {
    value: 'X',
    switch: function() {
        if (this.value === 'X') {
            this.value = 'O';
        } else {
            this.value = 'X';
        }
    }
};

$(document).ready(function() {
    $('.subGame').on('click',function(event) {
        var subGameX = event.pageX - $(this).offset().left;
        var subGameY = event.pageY - $(this).offset().top;
        var subGameNum = $(this).attr('subGame');
        var element = $(this)[0];
        processClick(element, subGameNum, subGameX, subGameY);
    });
});

function processClick(subGame, subGameNumber, x, y) {
    markBoard(subGame, turn.value); // Defined in gameView.js
    turn.switch();
}


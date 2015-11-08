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

function getSquareNum(canvas, x, y) {
    /*console.log('HTML Width: ' + canvas.width);
    console.log('HTML Height: ' + canvas.height);*/
    w = subGameWidth;
    h = subGameHeight;
    /*console.log('CSS Width: ' + canvas.width);
    console.log('CSS Height: ' + canvas.height);*/
    if (x > 0 && y > 0 && x <= w/3 && y <= h/3) {
		position = 0;
		//x = 5;
		//y = 5;
	}
	else if (x > w/3 && y > 0 && x <= w/1.5 && y <= h/3) {
		position = 1;
		//x = 55;
		//y = 5;
	}
	else if( x > w/1.5 && y > 0 && x <= w && y <= h/3) {
		position = 2;
		//x = 105;
		//y = 5;
	}
	else if (x > 0 && y > h/3 && x <= w/3 && y <= h/1.5) {
		position = 3;
		//x = 5;
		//y = 55;
	}
	else if (x > w/3 && y > h/3 && x <= w/1.5 && y <= h/1.5) {
		position = 4;
		//x = 55;
		//y = 55;
	}
	else if (x > w/1.5 && y > h/3 && x <= w && y <= h/1.5) {
		position = 5;
		//x = 105;
		//y = 55;
	}
	else if (x > 0 && y > h/1.5 && x <= w/3 && y <= h) {
		position = 6;
		//x = 5;
		//y = 105;
	}
	else if (x > w/3 && y > h/1.5 && x <= w/1.5 && y <= h) {
		position = 7;
		//x = 55;
		//y = 105;
	}
	else if (x > w/1.5 && y > h/1.5 && x <= w && y <= h) {
		position = 8;
		//x = 105;
		//y = 105;
	}
    console.log('Position: ' + position);
    return position; //{position : position, x : x, y : y};
}


function setInactiveSubGames() {
    for (i = 0; i < 9; i++) {
        setSubGameViewState(i, getSubGameStatus(i).active);
        console.log('set view state for subgame ' + i + ' to ' + getSubGameStatus(i).active);
    }
}

function processClick(subGame, subGameNumber, x, y) {
    //figure out which square the x and y correspond to
    console.log("X: " + x + " Y: " + y);
    var squareNum = getSquareNum(subGame, x, y);
    //check if the move is valid. if so, handle the view
    //movePlayed is definined in gameModel.js
    var moveInfo = movePlayed(subGameNumber, turn.value, squareNum);
    if (moveInfo.valid) { 
        markBoard(subGame, turn.value, squareNum); // markBoard() is Defined in gameView.js
        //deactivateAllBut(squareNum);
        if (moveInfo.gameEnded) {
            //draw the big x or o
            markBoard(subGame, turn.value);
            //getGameStatus() to see if the entire game is over
        }
        setInactiveSubGames();
        turn.switch();
        var gameStatus = getGameStatus(); //returns 0, 1, 2, or 3
        if (gameStatus > 0)
        {
             alertGameOver(); 
        }
    }
    
}


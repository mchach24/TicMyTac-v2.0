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

/**
* This functions sets the board subgames active or inactive after each move
* based on where the player placed his or her move
* @param {int}  subGameNumber  The subgame canvas that is to be active
*/
function deactivateAllBut(subGameNumber)
{
	//alert("mainGame - deactiveAllBut()");
	if (subGames[subGameNumber].gameOver)
	{
		for (i = 0; i < 9; i++)
		{
			//subGames[i].setActive();
            if (!subGames[i].gameOver) {
                //enableSubGame(i);
                setSubGameActive(i, true);
            }
		}
	}
	else
	{
		//subGames[x].setActive();
        setSubGameActive(subGameNumber, true);
		for (i = 0; i < 9; i++)
		{
			if (i != subGameNumber) {
                //disableSubGame(i);
                setSubGameActive(i, false);
            }
		}
	}
}

function processClick(subGame, subGameNumber, x, y) {
    //figure out which square the x and y correspond to
    console.log("X: " + x + " Y: " + y);
    var squareNum = getSquareNum(subGame, x, y);
    //check if the move is valid. if so, handle the view
    //movePlayed is definined in gameModel.js
    if (movePlayed(subGameNumber, turn.value, squareNum)) { 
        markBoard(subGame, turn.value, squareNum); // markBoard() is Defined in gameView.js
        turn.switch();
        deactivateAllBut(squareNum);
    }
    
}


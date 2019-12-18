let gameActive = false;
let activePlayer = 0;
let gameBoard = [];
let playerColor = [];
playerColor[1] = "red";
playerColor[2] = "blue";

let beginGame = function(){
    if (gameActive == true) return false;
    gameActive = true;

    for (row = 0; row<=5; row++){
        gameBoard[row] = [];
        for (col = 0; col<=6; col++){
        gameBoard[row][col] = 0;
        }console.log("Begin!")
    }

    drawBoard();
    activePlayer = 1;
    setUpTurn();
}


let drawBoard = function(){
    console.log("Draw")
    checkForWin();
    for(col = 0; col<=6; col++){
        for( row = 0; row <=5; row++){
            document.getElementById('square_'+row+'_'+col).innerHTML="<span class = 'piece player" +gameBoard[row][col]+"'></span>";
        }
    }
}

let checkForWin = function(){
    console.log("check")
    for (i=1; i<=2; i++){
        for(col = 0; col<=3; col++){
            for(row = 0; row <=5; row++){
                if(gameBoard[row][col] == i){
                    if((gameBoard[row][col+1]==i) && (gameBoard[row][col+2]==i) && (gameBoard[row][col+3]==i)){
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

    for (i=1; i<=2; i++){
        for (col = 0; col <=2; col++){
            for(row = 0; row<=2; row++){
                if (gameBoard[row][col]==i){
                    if((gameBoard[row+1][col]==i)&&(gameBoard[row+2][col]==i) && (gameBoard[row+3][col] == i)){
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    for (i=1; i<=2; i++){
        for(col = 0; col <=3; col++){
            for (row = 0; row <=2; row++){
                if(gameBoard[row][col] ==i){
                    if((gameboard[row +1][col+1] == i) && (gameBoard[row+2][col+2]==i) && (gameBoard[row+3][col+3]==i)){
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    for (i=1; i<=2; i++){
        for(col = 0; col <=3; col++){
            for(row = 3; row<=5; row++){
                if(gameBoard[row][col]==i){
                    if((gameBoard[row-1][col+1]==i) && (gameBoard[row-2][row+2] == i) && (gameBoard[row-3][row+3]==i)){
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
}

let endGame = function(winningPlayer){
    gameActive = false;
    document.getElementById('game_info').innerHTML = "Winner: " + winningPlayer; 
}

let setUpTurn = function(){
    console.log("setUp")
    if(gameActive){
        document.getElementById('game_info').innerHTML = "Current Player: Player " + activePlayer + " <span class='player"+activePlayer+"'>" + playerColor[activePlayer] + "</span>";
    }
}

let drop = function(col){
    console.log("Drop!")
    for (row = 5; row>=0; row--){
        if(gameBoard[row][col]==0){
            gameBoard[row][col] = activePlayer;
            drawBoard();
            if(activePlayer == 1){
                activePlayer= 2; 
            } else {
                activePlayer = 1;
            }
            setUpTurn();

            return true;
        }
    }
}




//beginGame();
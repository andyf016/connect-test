let gameActive = false;
let activePlayer = 0;
let gameBoard = [];
let playerColor = [];
playerColor[1] = "Blue";
playerColor[2] = "Red";
let dropCounts = 0 

let beginGame = function () {
    if (gameActive == true) return false;
    gameActive = true;

    for (row = 0; row <= 5; row++) {
        gameBoard[row] = [];
        for (col = 0; col <= 6; col++) {
            gameBoard[row][col] = 0;
        } 
    }
    let buttons = document.getElementsByClassName("drop");
        for (i = 0; i<7; i++){
            buttons[i].disabled = false;
        }
    
    drawBoard();
    activePlayer = 1;
    setUpTurn();
}


let drawBoard = function () {                       //
    checkForWin();
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 5; row++) {
            document.getElementById('square_' + row + '_' + col).innerHTML = "<span class = 'piece player" + gameBoard[row][col] + "'></span>";
        }
    }
}

let checkForWin = function () { 
    for (i = 1; i <= 2; i++) {                       //Check for left to right win condition
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 5; row++) {
                if (gameBoard[row][col] == i) {
                    if ((gameBoard[row][col + 1] == i) && (gameBoard[row][col + 2] == i) && (gameBoard[row][col + 3] == i)) {
                        endGame(i);console.log("leftRight")
                        return true;
                    }
                }
            }
        }
    }

    for (i = 1; i <= 2; i++) {                       //Check for top to bottom win condition
        for (col = 0; col <= 6; col++) {
            for (row = 0; row <= 2; row++) {
                if (gameBoard[row][col] == i) {
                    if ((gameBoard[row + 1][col] == i) && (gameBoard[row + 2][col] == i) && (gameBoard[row + 3][col] == i)) {
                        endGame(i); console.log("vert")
                        return true;
                    }
                }
            }
        }
    }
    for (i = 1; i <= 2; i++) {                       //Check for diagonal down win condition
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 2; row++) {
                if (gameBoard[row][col] == i) {
                    if ((gameBoard[row + 1][col + 1] == i) && (gameBoard[row + 2][col + 2] == i) && (gameBoard[row + 3][col + 3] == i)) {
                        endGame(i); console.log("diag")
                        return true;
                    }
                }
            }
        }
    }
    for (i = 1; i <= 2; i++) {                   //Check for diagonal up win condition
        for (col = 0; col <= 3; col++) {
            for (row = 3; row <= 5; row++) {
                if (gameBoard[row][col] == i) {
                    if ((gameBoard[row - 1][col + 1] == i) && (gameBoard[row - 2][row + 2] == i) && (gameBoard[row - 3][row + 3] == i)) {
                        endGame(i);console.log("diagUp")
                        return true;
                    }
                }
            }
        }
    }
}

let endGame = function(winningPlayer) {        //End Game function
    console.log("end")
    dropCounts = 0
    document.getElementById("game_table").disabled = true;
    gameActive = false;
    document.getElementById('game_info').innerHTML = "Crushing Victory! Player: " + winningPlayer;
    let buttons = document.getElementsByClassName("drop");
        for (i = 0; i<7; i++){
            buttons[i].disabled = true;
        }
    
}

let setUpTurn = function () {  
    dropCounts++
    console.log(dropCounts)
    if (dropCounts === 43){
        endGame("tie!")
    }             //Set turn for new player
    console.log("setUp")
    if (gameActive) {
        document.getElementById('game_info').innerHTML = "Current Player: Player " + activePlayer + " <span class='player" + activePlayer + "'>" + playerColor[activePlayer] + "</span>";
        
    }
}

let drop = function (col) {                 //Add peice to the lowest possible column 
    
    
    for (row = 5; row >= 0; row--) {
        if (gameBoard[row][col] == 0) {
            gameBoard[row][col] = activePlayer;
            drawBoard();
            if (activePlayer == 1) {
                activePlayer = 2;
            } else {
                activePlayer = 1;
            }
            setUpTurn();

            return true;
        }
    }
}





beginGame();



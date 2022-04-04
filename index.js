var player1Turn = true

var boardState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Functions for selection recording.

function block1() {

    if (gameOver == false){
    if (player1Turn == true) {

        document.getElementById("block1").src = "imgs/Crosses.png";
        boardState[0][0] = 1

    } else {
        document.getElementById("block1").src = "imgs/Naught.png";
        boardState[0][0] = 2
    }
    player1Turn = !player1Turn;
    winCon();
    document.getElementById("btn1").disabled = true;

} else {
}
};

function block2() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block2").src = "imgs/Crosses.png";
        boardState[0][1] = 1;
    } else {
        document.getElementById("block2").src = "imgs/Naught.png";
        boardState[0][1] = 2;
    }
    document.getElementById("btn2").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block3() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block3").src = "imgs/Crosses.png";
        boardState[0][2] = 1
    } else {
        document.getElementById("block3").src = "imgs/Naught.png";
        boardState[0][2] = 2
    }
    document.getElementById("btn3").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block4() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block4").src = "imgs/Crosses.png";
        boardState[1][0] = 1
    } else {

        document.getElementById("block4").src = "imgs/Naught.png";
        boardState[1][0] = 2
    }
    document.getElementById("btn4").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block5() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block5").src = "imgs/Crosses.png";
        boardState[1][1] = 1
    } else {
        document.getElementById("block5").src = "imgs/Naught.png";
        boardState[1][1] = 2
    }
    document.getElementById("btn5").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block6() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block6").src = "imgs/Crosses.png";
        boardState[1][2] = 1;
    } else {
        document.getElementById("block6").src = "imgs/Naught.png";
        boardState[1][2] = 2;

    }
    document.getElementById("btn6").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block7() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block7").src = "imgs/Crosses.png";
        boardState[2][0] = 1;
    } else {
        document.getElementById("block7").src = "imgs/Naught.png";
        boardState[2][0] = 2;
    }
    document.getElementById("btn7").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block8() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block8").src = "imgs/Crosses.png";
        boardState[2][1] = 1;
    } else {
        document.getElementById("block8").src = "imgs/Naught.png";
        boardState[2][1] = 2;
    }
    document.getElementById("btn8").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

function block9() {
    if (gameOver == false){
    if (player1Turn == true) {
        document.getElementById("block9").src = "imgs/Crosses.png";
        boardState[2][2] = 1;
    } else {
        document.getElementById("block9").src = "imgs/Naught.png";
        boardState[2][2] = 2;
    }
    document.getElementById("btn9").disabled = true;
    player1Turn = !player1Turn;
    winCon();
} else {
}
};

// below is for calculating the score

var p1Score = 0
var p2Score = 0

var buttonsNum = document.querySelectorAll(".gameButton").length;

var gameOver = false


function winCon() {

    if (boardState[0][0] == 1 && boardState[0][1] == 1 && boardState[0][2] == 1 ||
        boardState[1][0] == 1 && boardState[1][1] == 1 && boardState[1][2] == 1 ||
        boardState[2][0] == 1 && boardState[2][1] == 1 && boardState[2][2] == 1

        ||
        boardState[0][0] == 1 && boardState[1][0] == 1 && boardState[2][0] == 1 ||
        boardState[0][1] == 1 && boardState[1][1] == 1 && boardState[2][1] == 1 ||
        boardState[0][2] == 1 && boardState[1][2] == 1 && boardState[2][2] == 1

        ||
        boardState[0][0]== 1 && boardState[1][1]== 1 && boardState[2][2] == 1 ||
        boardState[0][2]== 1 && boardState[1][1]== 1 && boardState[2][0] == 1) {

        window.alert("Player 1 Wins!");
        p1Score++;

        document.getElementById("player1Score").innerHTML = "Score: " + p1Score;


        gameOver=true;
        resetBoard();

    } else if (boardState[0][0] == 2 && boardState[0][1] == 2 && boardState[0][2] == 2 ||
        boardState[1][0] == 2 && boardState[1][1] == 2 && boardState[1][2] == 2 ||
        boardState[2][0] == 1 && boardState[2][1] == 1 && boardState[2][2] == 1

        ||
        boardState[0][0] == 2 && boardState[1][0] == 2 && boardState[2][0] == 2 ||
        boardState[0][1] == 2 && boardState[1][1] == 2 && boardState[2][1] == 2 ||
        boardState[0][2] == 2 && boardState[1][2] == 2 && boardState[2][2] == 2

        ||
        boardState[0][0]== 2 && boardState[1][1]== 2 && boardState[2][2] == 2 ||
        boardState[0][2]== 2 && boardState[1][1]== 2 && boardState[2][0] == 2) {

        window.alert("Player 2 Wins!");
        p2Score++;

        document.getElementById("player2Score").innerText = "Score: " + p2Score;

        gameOver=true;
        
        resetBoard();
    }
    

};

function resetBoard(){

boardState = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    player1Turn = true

    gameOver = false;

    const button = document.querySelectorAll('button');
    button.disabled = false;

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;


    document.getElementById("block9").src = "/imgs/Trans.png";
    document.getElementById("block8").src = "/imgs/Trans.png";
    document.getElementById("block7").src = "/imgs/Trans.png";
    document.getElementById("block6").src = "/imgs/Trans.png";
    document.getElementById("block5").src = "/imgs/Trans.png";
    document.getElementById("block4").src = "/imgs/Trans.png";
    document.getElementById("block3").src = "/imgs/Trans.png";
    document.getElementById("block2").src = "/imgs/Trans.png";
    document.getElementById("block1").src = "/imgs/Trans.png";


};
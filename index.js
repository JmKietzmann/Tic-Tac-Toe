var player1Turn = true


function toggleTurnP1() {

    player1Turn = true
}

var numberOfBlocks = document.querySelectorAll(".block").length;

for (var i = 0; i < numberOfBlocks; i++) {
    document.querySelectorAll(".block")[i].addEventListener("click", function () {

        if (player1Turn == true) {

            document.getElementById(this.id).src = "imgs/Crosses.png"
        } else {
            document.getElementById(this.id).src = "imgs/Naught.png"
        }

        player1Turn = !player1Turn;

        removeEventListener();

    })
}

// Functions for selection recording.

var boardState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


function block1() {
    if (player1Turn == true) {
    boardState = [0][0] = 1  
    }else{
        boardState = [0][0] = 2
    }

    document.getElementById("btn1").disabled = true;

}

function block2() {
    if (player1Turn == true) {
    boardState = [0][1] = 1  
    }else{
        boardState = [0][1] = 2
    }
    document.getElementById("btn2").disabled = true;


    
}

function block3() {
    if (player1Turn == true) {
    boardState = [0][2] = 1  
    }else{
        boardState = [0][2] = 2
    }
    document.getElementById("btn3").disabled = true;
}

function block4() {
    if (player1Turn == true) {
    boardState = [1][0] = 1  
    }else{
        boardState = [1][0] = 2
    }
    document.getElementById("myBtn").disabled;
}

function block5() {
    if (player1Turn == true) {
    boardState = [1][1] = 1  
    }else{
        boardState = [1][1] = 2
    }
    document.getElementById("myBtn").disabled;
}

function block6() {
    if (player1Turn == true) {
    boardState = [1][2] = 1  
    }else{
        boardState = [1][2] = 2
    }
    document.getElementById("myBtn").disabled;
}

function block7() {
    if (player1Turn == true) {
    boardState = [2][0] = 1  
    }else{
        boardState = [2][0] = 2
    }
    document.getElementById("myBtn").disabled;
}

function block8() {
    if (player1Turn == true) {
    boardState = [2][1] = 1  
    }else{
        boardState = [2][1] = 2
    }
    document.getElementById("myBtn").disabled;
}

function block9() {
    if (player1Turn == true) {
    boardState = [2][2] = 1  
    }else{
        boardState = [2][2] = 2
    }
    document.getElementById("myBtn").disabled;
}

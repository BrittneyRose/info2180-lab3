"use strict";

let indexVar = 0;
let currentPlayer = "X";
let gameBoard = Array(9).fill("");

//Layout of board
document.addEventListener('DOMContentLoaded', function(){

    let board = document.getElementById('board');

    let divElements = board.querySelectorAll('div');

    divElements.forEach(function(div) {
         div.classList.add("square");
         div.setAttribute("id", indexVar);
         indexVar ++;
    });

    divElements.forEach(function(square){
        square.addEventListener("click", function(){

            let squareId = square.id;

            if (square.innerHTML === ""){
                square.innerHTML = currentPlayer;
                square.classList.add(currentPlayer);
                gameBoard[squareId] = currentPlayer;
                
                currentPlayer === "X"? currentPlayer = "O": currentPlayer = "X";
            }
        });
    
    });

});



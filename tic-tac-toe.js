"use strict";

let indexVar = 0;
let currentPlayer = "X";
let gameBoard = Array(9).fill("");


document.addEventListener('DOMContentLoaded', function(){

    //Layout of board
    let board = document.getElementById('board');

    let divElements = board.querySelectorAll('div');

    divElements.forEach(function(div) {
         div.classList.add("square");
         div.setAttribute("id", indexVar);
         indexVar ++;
    });

    
    divElements.forEach(function(square){

        //Exercise 3
        square.addEventListener("mouseover", function(){
            square.classList.add("hover");
        });
        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });

        //Exercise 2
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



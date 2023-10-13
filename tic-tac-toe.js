"use strict";

let indexVar = 0;
let currentPlayer = "X";
let gameBoard = Array(9).fill("");



document.addEventListener('DOMContentLoaded', function(){

    //Layout of board
    let board = document.getElementById('board');

    let divElements = board.querySelectorAll('div');
    let stat = document.getElementById('status');

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


            if (square.innerHTML === "") {
                square.innerHTML = currentPlayer;
                square.classList.add(currentPlayer);
                gameBoard[squareId] = currentPlayer;
                
                currentPlayer === "X"? currentPlayer = "O": currentPlayer = "X";
                theWinner();
            }
        });
    
    });

    
    function theWinner(){

        let winRows = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

        for (let row of winRows){
            if (checker(row) === "X"){
                stat.textContent = "Congratulations! X is the Winner!";
                stat.classList.add("you-won");
                break;
            }
            else if (checker(row) === "O"){
                stat.textContent = "Congratulations! O is the Winner!";
                stat.classList.add("you-won");
                break;
            }
        }

    }

    function checker(row){
        let checkArray = [];
        let xArray = ["X","X","X"];
        let oArray = ["O","O","O"];

        for (let i of row){
            if (gameBoard[i] === "X"){
                checkArray.push("X")
            } 
            else if (gameBoard[i] === "O"){
                checkArray.push("O")
            }
        }

        if (JSON.stringify(checkArray) === JSON.stringify(xArray)){
            return "X";
        }
        else if (JSON.stringify(checkArray) === JSON.stringify(oArray)){
            return "O";
        }
        else{
            return "N";
        }
    }
   

});



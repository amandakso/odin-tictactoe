const gameBoard = (() => {
    const board = ["free", "free", "free", "free", "free", "free", "free", "free", "free"];

    const markSpace = (item, symbol) => {
        item.innerText = symbol;
        item.classList.add(symbol);
        item.classList.add("marked");
        updateBoard(item.id, symbol);
        displayController.completeTurn();
    }

    const checkSpace = (item, symbol) => {
        if (!item.classList.contains("marked")) {
            markSpace(item, symbol);
        } else {
            message.innerText = "Space already taken. Pick an available space!";
        }
    }

    const updateBoard = (num, symbol) => {
        switch(num) {
            case "s0":
                board[0] = symbol;
                break;
            case "s1":
                board[1] = symbol;
                break;
            case "s2":
                board[2] = symbol;
                break;
            case "s3":
                board[3] = symbol;
                break;
            case "s4":
                board[4] = symbol;
                break;
            case "s5":
                board[5] = symbol;
                break;
            case "s6":
                board[6] = symbol;
                break;
            case "s7":
                board[7] = symbol;
                break;
            case "s8":
                board[8] = symbol;
                break;
            default:
                console.log("error7");        
        };
    };

    const displayBoard = () => {
        const list = document.getElementById("spaces");
        const idLocation = (x) => {
            if (0 <= x && x <= 2) {
                return "top";
            } else if ( 3 <= x && x <= 5) {
                return "middle";
            } else if ( 6 <= x && x <= 8) {
                return "bottom";
            } else  {
                console.log("error");
            };
        };

        const labelSpace = (item, num) => {
            item.classList.add(idLocation(num));
            item.classList.add("space");
            item.id = ("s" + num);
        }
      
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "free"){
                let itemFree = document.createElement("list");
                labelSpace(itemFree, i);
                list.append(itemFree);
            } else if (board[i].length < 9) {
                let itemM = document.createElement("list");
                itemM.innerText = board[i];
                labelSpace(itemM, i);
                list.append(itemM);
            } else {
                console.log("error emoji");
            };
        }
    }

    const renderBoard = () => {
        displayBoard();
        addClick();
    }

    const addClick = () => {
        let spaces = document.querySelectorAll(".space");
        for (const space of spaces) {
            space.addEventListener("click", () => {
                let currentTurn = displayController.checkTurn();
                                if (currentTurn == player1.getNumber()) {
                                    symbol = player1.symbol;
                                    checkSpace(space, symbol);
                                } else if (currentTurn == player2.getNumber()) {
                                    symbol = player2.symbol;
                                    checkSpace(space, symbol);
                                } else {
                                    console.log("error5");
                                };
                            });
        };
    };

    const clearBoard = () => {
        let spots = document.querySelectorAll(".space");
        for (const spot of spots) {
            spot.remove();
        }
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "free";
        };
    };

    return {
        renderBoard, clearBoard, displayBoard, resetBoard,
    }

})();


const Player = (name, symbol, number) => {
    const getNumber = () => {
        if (number == 1) {
            return 1;
        }
        else if (number == 2) {
            return 2;
        } else {
            console.log("error3");
        };
    };

    return {getNumber, name, symbol};
};

const player1 = Player("Player 1", "X", 1);
const player2 = Player("Player 2", "O", 2);

const displayController = (() => {
    let freeSpaces = 9;
    let gameCounter = 0;
    const initialTurn = 1;
    const message = document.getElementById("message");
    let playerTurn = initialTurn;

    const setUpGame = () => {
        const changeName = (newName, num) => {
            if (num == 1) {
                player1.name = newName;
                console.log(player1.name);
                
            } else if ( num == 2) {
                player2.name = newName;
                console.log(player2.name);
            } else {
                console.log("errorname");
            }
            
        };

        const truncateString = (str) => {
            if (str.length > 15) {
                return str.slice(0,15);
              } else {
                return str;
              }
        };

        playerOne = document.getElementById("playerOneName");
        
        playerOne.addEventListener("click", () => {
            newPlayerOne = document.getElementById("input1").value;
            if (newPlayerOne == "") {
                newPlayerOne = "Player 1";
            };
            newPlayerOne = truncateString(newPlayerOne);
            player1.name = newPlayerOne;
            console.log(player1.name);
        });
        playerTwo = document.getElementById("playerTwoName");
        
        playerTwo.addEventListener("click", () => {
            newPlayerTwo = document.getElementById("input2").value;
            if (newPlayerTwo == "") {
                newPlayerTwo = "Player 2";
            };
            newPlayerTwo = truncateString(newPlayerTwo);
            player2.name = newPlayerTwo;
            console.log(player2.name);
        });

        //add marker buttons
        markers1 = document.querySelectorAll(".marker1");
        markers1.forEach(marker1 => {
            marker1.addEventListener("click", () => {
                player1.symbol = marker1.innerText;
                let chosen = document.getElementById("chosen1");
                chosen.innerText = marker1.innerText;
                
            });
        });

        markers2 = document.querySelectorAll(".marker2");
        markers2.forEach(marker2 => {
            marker2.addEventListener("click", () => {
                player2.symbol = marker2.innerText;
                let chosen = document.getElementById("chosen2");
                chosen.innerText = marker2.innerText;
            });
        });

    };

    const resetGame = () => {
            freeSpaces = 9;
            gameCounter = 0;
            player1.name = "Player 1";
            player2.name = "Player 2";
            player1.symbol = "X";
            player2.symbol = "O";
            playerTurn = initialTurn;
            gameBoard.resetBoard();
            message.innerText = "Let's Play!";
            gameBoard.clearBoard();
            gameBoard.displayBoard();
            let marks = document.querySelectorAll(".mark");
            marks.forEach(mark => {
                mark.removeAttribute("disabled");
            });
            let chosen1 = document.getElementById("chosen1");
            chosen1.innerText = "X";
            let chosen2 = document.getElementById("chosen2");
            chosen2.innerText = "O";
    };


    const startGame = () => {
        const btn = document.getElementById("start");
        let start = true;
        btn.addEventListener("click", () => {
            if (start) {
                gameBoard.clearBoard();
                gameBoard.renderBoard();
                start = false;
                btn.innerText = "RESET";
                btn.style.backgroundColor = "red";
                message.innerText = "Let's Play! " + player1.name + " goes first!";
                let marks = document.querySelectorAll(".mark");
                marks.forEach(mark => {
                    mark.setAttribute("disabled","");
                    console.log("disable");
                })
            }
            else {
                resetGame();
                start = true;
                btn.innerText = "START";
                btn.style.backgroundColor = "green";
                message.innerText ="Choose Player Names";
            }
        })
        return initialTurn;
    };

    const checkTurn = () => {
        if (playerTurn == 1) {
            return 1;
        } else if (playerTurn == 2) {
            return 2;
        } else {
            console.log("error4");
        }
    };

    const changeTurn = () => {
        if (playerTurn == 1) {
            playerTurn = 2;
        } else {
            playerTurn = 1;
        }
    };

    const takeSpace = () => {
        freeSpaces -= 1;
    };


    const completeTurn = () => {
        let currentPlayer;
        if (playerTurn == player1.getNumber()) {
            currentPlayer = player1.name;
            checkWin(player1.symbol, currentPlayer);
            checkDraw();
            message.innerText = player2.name + ", it's your turn!";
        } else if (playerTurn == player2.getNumber()) {
            currentPlayer = player2.name;
            checkWin(player2.symbol, currentPlayer);
            checkDraw();
            message.innerText = player1.name + " ,it's your turn!";
        } else {
            console.log("error6");
        };
        endGame();
        takeSpace();
        changeTurn();
    }

    const checkDraw = () => {
        if (freeSpaces < 2) {
            console.log("it's a draw");
            gameCounter +=1;
        } else {
            gameCounter += 0;
        }
    };

    const checkWin = (symbol, name) => {
        let s0 = document.querySelector("#s0").classList.contains(symbol);
        let s1 = document.querySelector("#s1").classList.contains(symbol);
        let s2 = document.querySelector("#s2").classList.contains(symbol);
        let s3 = document.querySelector("#s3").classList.contains(symbol);
        let s4 = document.querySelector("#s4").classList.contains(symbol);
        let s5 = document.querySelector("#s5").classList.contains(symbol);
        let s6 = document.querySelector("#s6").classList.contains(symbol);
        let s7 = document.querySelector("#s7").classList.contains(symbol);
        let s8 = document.querySelector("#s8").classList.contains(symbol);
        
        // check for wins
        if ((s0 && s1 && s2) || (s3 && s4 && s5) || (s6 && s7 && s8) || (s0 && s3 && s6) || (s1 && s4 && s7) || (s2 && s5 && s8) || (s0 && s4 && s8) || (s2 && s4 && s6)) {
            console.log("winner: " + name);
            gameCounter += 5;
        } else {
            gameCounter +=0;
        };
    };

    const displayMessage = (x) => {
        switch (x) {
            case 1:
                message.innerText = player1.name + " Wins!";
                break;
            case 2:
                message.innerText = player2.name + " Wins!";
                break;
            case "draw":
                message.innerText = "It's a Draw!";
                break;
            default:
            console.log("errormessage");
        };
    };

    const endGame = () => {
        if (gameCounter >= 5) {
            //end game
            console.log("winner, end game");
            let num = checkTurn();
            displayMessage(num);
            gameBoard.clearBoard();
            gameBoard.displayBoard();
            
        } else if (gameCounter !=0) {
            console.log("draw, end game");
            displayMessage("draw");
            gameBoard.clearBoard();
            gameBoard.displayBoard();
        
        } else {
            gameCounter += 0;
        }
    };

    return {
        startGame,
        checkTurn,
        completeTurn,
        setUpGame,
    }

})();

gameBoard.displayBoard();
displayController.startGame();
displayController.setUpGame();




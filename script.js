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
            alert("Space already taken. Pick an available space!");
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
            // item.classList.add("s" + num);
            item.id = ("s" + num);
        }

        
        
        for (let i = 0; i < board.length; i++) {
            switch (board[i]) {
                case "X":
                    let itemX = document.createElement("list");
                    itemX.innerText = "X";
                    labelSpace(itemX, i);
                    list.append(itemX);
                    break;
                    case "O":
                        let itemO = document.createElement("list");
                        itemO.innerText = "0";
                        labelSpace(itemO, i);
                        list.append(itemO);
                        break;
                        case "free":
                            let itemFree = document.createElement("list");
                            labelSpace(itemFree, i);
                            /*
                            itemFree.addEventListener("click", () => {
                                let currentTurn = displayController.checkTurn();
                                if (currentTurn == player1.getNumber()) {
                                    symbol = player1.getSymbol();
                                    checkSpace(itemFree, symbol);
                                } else if (currentTurn == player2.getNumber()) {
                                    symbol = player2.getSymbol();
                                    checkSpace(itemFree, symbol);
                                } else {
                                    console.log("error5");
                                };
                            });
                            */
                            
                            list.append(itemFree);
                    break;
                default:
                    console.log("error2");
            }

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
                                    symbol = player1.getSymbol();
                                    checkSpace(space, symbol);
                                } else if (currentTurn == player2.getNumber()) {
                                    symbol = player2.getSymbol();
                                    checkSpace(space, symbol);
                                } else {
                                    console.log("error5");
                                };
                            });
        }
    };

    const clearBoard = () => {
        let spots = document.querySelectorAll(".space");
        for (const spot of spots) {
            spot.remove();
        }
    }

    return {
        renderBoard, clearBoard, displayBoard,
    }

})();

gameBoard.renderBoard();

const Player = (name, symbol, number) => {
    const getName = () => name;
    const getSymbol = () => symbol;
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
    return {getName, getSymbol, getNumber};
}

const player1 = Player("name1", "X", 1);
const player2 = Player("name2", "O", 2);

const displayController = (() => {
    let freeSpaces = 9;
    let gameCounter = 0;
    const initialTurn = 1;
    let playerTurn = initialTurn;


    const startGame = () => {
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
            currentPlayer = player1.getName();
            checkWin(player1.getSymbol(), currentPlayer);
            checkDraw();
        } else if (playerTurn == player2.getNumber()) {
            currentPlayer = player2.getName();
            checkWin(player2.getSymbol(), currentPlayer);
            checkDraw();
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
        /*
        win possibilities
        s0 s1 s2
        s3 s4 s5
        s6 s7 s8
        s0 s3 s6
        s1 s4 s7
        s2 s5 s8
        s0 s4 s8
        s2 s4 s6
        */
    };

    const endGame = () => {
        if (gameCounter >= 5) {
            //end game
            console.log("winner, end game");
            gameBoard.clearBoard();
            gameBoard.displayBoard();
            
        } else if (gameCounter !=0) {
            console.log("draw, end game");
            gameBoard.clearBoard();
            gameBoard.displayBoard();
        
        } else {
            gameCounter += 0;
        }
    }

    return {
        startGame,
        checkTurn,
        completeTurn,
    }

})();

displayController.startGame();



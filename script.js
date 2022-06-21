const gameBoard = (() => {
    const board = ["free", "free", "free", "free", "free", "free", "free", "free", "free"];
    const displayBoard = () => {
        const list = document.getElementById("spaces");
        const idLocation = (x) => {
            switch(x) {
                case 0:
                    return "top";
                case 1:
                    return "top";
                case 2:
                    return "top";
                case 3:
                    return "middle";
                case 4:
                    return "middle";
                case 5:
                    return "middle";
                case 6:
                    return "bottom";    
                case 7:
                    return "bottom";
                case 8:
                    return "bottom";
                default:
                    console.log("error");
            }
        };

        const markSpace = (item, symbol) => {
            console.log(symbol);
            item.innerText = symbol;
            displayController.changeTurn();
        }

        const labelSpace = (item, num) => {
            item.classList.add(idLocation(num));
            item.classList.add("space");
            item.classList.add("s" + num);
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
                    itemFree.addEventListener("click", () => {
                        let currentTurn = displayController.checkTurn();
                        if (currentTurn == player1.getNumber()) {
                            symbol = player1.getSymbol();
                            markSpace(itemFree, symbol);
                        } else if (currentTurn == player2.getNumber()) {
                            symbol = player2.getSymbol();
                            markSpace(itemFree, symbol);
                        } else {
                            console.log("error5");
                        }
                    })
                    list.append(itemFree);
                    break;
                default:
                    console.log("error2");
            }

        }
    }
    return {
        displayBoard,
    }

})();

gameBoard.displayBoard();

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

const displayController = (() => {
    const initialTurn = 1;
    let playerTurn = initialTurn;
    const startGame = () => {
        return initialTurn;
    }
    const checkTurn = () => {
        if (playerTurn == 1) {
            return 1;
        } else if (playerTurn == 2) {
            return 2;
        } else {
            console.log("error4");
        }
    }
    const changeTurn = () => {
        if (playerTurn == 1) {
            playerTurn = 2;
        } else {
            playerTurn = 1;
        }
        console.log(playerTurn);
    }

    return {
        startGame,
        checkTurn,
        changeTurn,
    }

})();

displayController.startGame();
const player1 = Player("name1", "X", 1);
const player2 = Player("name2", "O", 2);


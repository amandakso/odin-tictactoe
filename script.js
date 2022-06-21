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

        const markSpace = (spot) => {
            console.log(spot);
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
                        markSpace(i);
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

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
}

const displayController = (() => {

})();
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

        for (let i = 0; i < board.length; i++) {
            switch (board[i]) {
                case "X":
                    let itemX = document.createElement("list");
                    itemX.innerText = "X";
                    itemX.classList.add(idLocation(i));
                    itemX.classList.add("space");
                    itemX.classList.add("s" + i);
                    list.append(itemX);
                    break;
                case "O":
                    let itemO = document.createElement("list");
                    itemO.innerText = "0";
                    itemO.classList.add(idLocation(i));
                    itemO.classList.add("space");
                    itemO.classList.add("s" + i);
                    list.append(itemO);
                    break;
                case "free":
                    let itemFree = document.createElement("list");
                    itemFree.classList.add(idLocation(i));
                    itemFree.classList.add("space");
                    itemFree.classList.add("s" + i);
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
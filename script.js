const gameBoard = (() => {
    const board = ["X", "X", "X", "O", "O", "O", "X", "O", "X"];
    const displayBoard = () => {
        const list = document.getElementById("spaces");
        const idLocation = (x) => {
            switch(x) {
                case 0:
                    return "tl";
                case 1:
                    return "tm";
                case 2:
                    return "tr";
                case 3:
                    return "ml";
                case 4:
                    return "mm";
                case 5:
                    return "mr";
                case 6:
                    return "bl";    
                case 7:
                    return "bm";
                case 8:
                    return "br";
                default:
                    console.log("error");
            }
        };
        for (let i = 0; i < board.length; i++) {
            switch (board[i]) {
                case "X":
                    let itemX = document.createElement("list")
                    itemX.innerText = "X";
                    itemX.classList.add(idLocation(i));
                    itemX.classList.add("space");
                    list.append(itemX);
                    break;
                case "O":
                    let itemO = document.createElement("list")
                    itemO.innerText = "0";
                    itemO.classList.add(idLocation(i));
                    itemO.classList.add("space");
                    list.append(itemO);
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
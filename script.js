const gameBoard = (() => {
    const board = ["X", "X", "X", "O", "O", "O", "X", "O", "X"];
    const displayBoard = () => {
        const list = document.getElementById("spaces");
        const idLocation = (x) => {
            switch(x) {
                case 0:
                    return "top-one";
                case 1:
                    return "top-two";
                case 2:
                    return "top-three";
                case 3:
                    return "middle-one";
                case 4:
                    return "middle-two";
                case 5:
                    return "middle-three";
                case 6:
                    return "bottom-one";    
                case 7:
                    return "bottom-two";
                case 8:
                    return "bottom-three";
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
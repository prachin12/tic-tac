let board = [];
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
           [0, 3, 6], [1, 4, 7], [2, 5, 8], 
           [0, 4, 8], [2, 4, 6]];
let trigger = 0;
let count = 0;

// Game initialization
const init = () => {
    for (let i = 0; i < 9; i++) {
        board[i] = 0;
    }
    dom();
}

// Selecting from DOM
const dom = () => {
    let columns = document.querySelectorAll('.column');
    addListener(columns);
}

const addListener = (columns) => {
    let id = 0;
    columns.forEach(column => {
        column.id = id++;
        column.innerText = "";

        // Remove any existing event listeners
        column.removeEventListener('click', handleClick);

        // Attach the event listener
        column.addEventListener('click', handleClick);
    });
}

const handleClick = (event) => {
    player(event.target);
    console.log(event);
}

// Player logic
const player = (column) => {
    let index = column.id;

    if (board[index] == 0) {
        count++;
        if (trigger == 0) {
            board[index] = 1;
            trigger = 1;
            column.innerText = 'X';
        } else {
            board[index] = 2;
            trigger = 0;
            column.innerText = 'O';
        }
    }

    // Check for a winner
    if (count > 4) {
        let re = winCheck();
        if (re == 1) {
            console.log('X won');
            reset();
        } else if (re == 2) {
            console.log('O won');
            reset();
        } else if (count === 9) {
            console.log('Draw');
            reset();
        }
    }
}

const winCheck = () => {
    let xCount, oCount;
    for (let i = 0; i <= 7; i++) {
        xCount = 0;
        oCount = 0;
        for (let j = 0; j <= 2; j++) {
            if (board[win[i][j]] == 1) {
                xCount++;
            } else if (board[win[i][j]] == 2) {
                oCount++;
            }
        }
        if (xCount == 3) return 1; // X won
        if (oCount == 3) return 2; // O won
    }
    return 0; // No winner yet
}

const reset = () => {
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.innerText = "";
        // Remove the event listener
        column.removeEventListener('click', handleClick);
    });

    // Reset game state
    for (let i = 0; i < 9; i++) {
        board[i] = 0;
    }
    console.log(board);
    trigger = 0;
    count = 0;

    // Reinitialize the game
    playAgain();
}

const playAgain = () => {
    init();
}

// Start the game
init();

let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('reset');
let turnO = true; // true for X's turn, false for O's turn
const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],        
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            box.textContent = turnO ? 'X' : 'O';    
            turnO = !turnO;
        }
        box.disabled = true;

        checkWinner();
    });
});
const checkWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (boxes[a].textContent !== '' && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            alert(`Player ${boxes[a].textContent} wins!`);
            resetGame();
            return;
        }
    }
};

resetButton.addEventListener('click', resetGame);

function resetGame() {
    boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
    });
    turnO = true;
}





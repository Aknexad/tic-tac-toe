const GameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
  indexs: [],
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 6, 4],
  ],
  player: {
    class: 'x',
    score: 0,
  },
  computer: {
    class: 'o',
    score: 0,
  },
};

const cell = document.querySelectorAll('[data-cell]');

cell.forEach((element) => {
  element.addEventListener('click', handelCellClick, {
    once: true,
  });
});

function handelCellClick(e) {
  const idCell = e.target.id;
  const board = GameBoard.board;
  board[idCell] = 'X';
  computer();
  renderBoard();
  chackForWin();
}

function renderBoard() {
  for (let i = 0; i < cell.length; i++) {
    const element = cell[i];
    element.innerText = GameBoard.board[i];
  }
}

function computer() {
  findeEmptyIndex();
  let emptyIndex = GameBoard.indexs;
  let board = GameBoard.board;
  let randumNumber = Math.floor(
    Math.random() * emptyIndex.length
  );
  GameBoard.board[emptyIndex[randumNumber]] = 'O';
}

function findeEmptyIndex() {
  GameBoard.indexs = [];
  let indexs = GameBoard.indexs;
  let board = GameBoard.board;
  for (let i = 0; i < board.length; i++) {
    const element = board[i];
    if (element === '') {
      indexs.push(i);
    }
  }
}

function chackForWin() {
  let win;
  for (let i = 0; i < 7; i++) {
    const winCondition = GameBoard.winningCombinations[i];
    let a = GameBoard.board[winCondition[0]];
    let b = GameBoard.board[winCondition[1]];
    let c = GameBoard.board[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (
      a === b &&
      b === c &&
      b === 'X' &&
      a === 'X' &&
      c === 'X'
    ) {
      win = 'x';
      break;
    }
    if (
      a === b &&
      b === c &&
      b === 'O' &&
      a === 'O' &&
      c === 'O'
    ) {
      win = 'o';
    }
  }
  if (win == 'x') {
    console.log(`${win} is winner`);
  }
  if (win === 'o') {
    console.log(`${win} is winner`);
  }
}

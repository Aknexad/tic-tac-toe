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
    [2, 4, 6],
  ],
  player: {
    class: 'x',
    score: 0,
  },
  computer: {
    class: 'o',
    score: 0,
  },
  DomFunction: {
    winningMassage: (win) => {
      const winmassage =
        document.querySelector('#winningText');
      winmassage.innerText = `${win} is winner`;
      document
        .querySelector('#winningMassge')
        .classList.add('show');
    },
    timeoutForMassage: () => {
      setTimeout(() => {
        document
          .querySelector('#winningMassge')
          .classList.remove('show');
      }, 1500);
    },
    removeEventListener: () => {
      cell.forEach((element) => {
        element.removeEventListener(
          'click',
          handelCellClick
        );
        element.addEventListener('click', handelCellClick, {
          once: true,
        });
      });
    },
  },
};

const cell = document.querySelectorAll('[data-cell]');
const resatBtn = document.querySelector('#restart');

cell.forEach((element) => {
  element.addEventListener('click', handelCellClick, {
    once: true,
  });
});
resatBtn.addEventListener('click', handelClickReaset);

function handelClickReaset(e) {
  GameBoard.player.score = 0;
  GameBoard.computer.score = 0;
  document.querySelector('#x-score').innerText = 0;
  document.querySelector('#o-score').innerText = 0;
  clearBoard();
  GameBoard.DomFunction.removeEventListener();
}

function handelCellClick(e) {
  player(e.target.id);
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

function player(id) {
  const board = GameBoard.board;
  if (board[id] === '') {
    board[id] = 'X';
  }
}

function computer() {
  findeEmptyIndex();
  let emptyIndex = GameBoard.indexs;
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
  for (let i = 0; i <= 7; i++) {
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
      break;
    }
  }
  if (win == 'x') {
    GameBoard.DomFunction.winningMassage(win);
    GameBoard.DomFunction.timeoutForMassage();
    GameBoard.player.score++;
    scoreBoard(win);
    clearBoard();
    GameBoard.DomFunction.removeEventListener();
  }
  if (win === 'o') {
    GameBoard.DomFunction.winningMassage(win);
    GameBoard.DomFunction.timeoutForMassage();
    GameBoard.computer.score++;
    scoreBoard(win);
    clearBoard();
    GameBoard.DomFunction.removeEventListener();
  }

  if (GameBoard.indexs.length === 0) {
    win = 'draw';
    const winmassage =
      document.querySelector('#winningText');
    winmassage.innerText = ` Is A Draw `;
    document
      .querySelector('#winningMassge')
      .classList.add('show');
    GameBoard.DomFunction.timeoutForMassage();
    clearBoard();
    GameBoard.DomFunction.removeEventListener();
  }
}

function scoreBoard(win) {
  const xScoreId = document.querySelector('#x-score');
  const oScoreId = document.querySelector('#o-score');
  if (win === 'x') {
    xScoreId.innerText = GameBoard.player.score;
  } else {
    oScoreId.innerText = GameBoard.computer.score;
  }
}

function clearBoard() {
  let board = GameBoard.board;
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
  renderBoard();
}

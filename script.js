const GameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
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
  const emty = board.filter((word) => word == '');
  renderBoard();
}

function renderBoard() {
  for (let i = 0; i < cell.length; i++) {
    const element = cell[i];
    element.innerText = GameBoard.board[i];
  }
}

// const selectclass = document.querySelectorAll(
//   '[data-select-class]'
// );
// const cell = document.querySelectorAll('[ data-cell]');

// selectclass.forEach((element) => {
//   element.addEventListener('click', handelClassSelect);
// });
// cell.forEach((element) => {
//   element.addEventListener('click', handeClickCell, {
//     once: true,
//   });
// });

// function handelClassSelect(e) {
//   if (e.target.innerText === 'O') {
//     document
//       .querySelector('.btn-select')
//       .classList.remove('btn-select');
//     e.target.classList.add('btn-select');
//     GameBoard.player.class = 'O';
//     GameBoard.pc.class = 'X';
//   } else {
//     document
//       .querySelector('.btn-select')
//       .classList.remove('btn-select');
//     e.target.classList.add('btn-select');
//   }
// }

// function reanderBoard() {
//   let bord = GameBoard.board;
//   let cell = document.querySelectorAll('[data-cell]');
//   for (let i = 0; i < cell.length; i++) {
//     const element = cell[i];
//     element.classList.add(bord[i]);
//   }
// }

// function handeClickCell(e) {
//   const cell = e.target;
//   placeMark(cell, GameBoard.player.class);
// }

// function placeMark(cell, playerClass) {
//   cell.classList.add(playerClass);

// }

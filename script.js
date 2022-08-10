const selectType = document.querySelectorAll(
  '[data-select-type]'
);

let playerClassSelect = 'X';

selectType.forEach((element) => {
  element.addEventListener('click', (e) => {
    playerClassSelect = e.target.innerText;
    if (playerClassSelect === 'O') {
      document
        .querySelector('.btn-select')
        .classList.remove('btn-select');
      element.classList.add('btn-select');
    } else {
      document
        .querySelector('.btn-select')
        .classList.remove('btn-select');
      element.classList.add('btn-select');
    }
  });
});

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

//* 1 спосіб
inputEl.addEventListener('input', changeSizeText);

function changeSizeText() {
  textEl.style.fontSize = inputEl.value + 'px';
}

//* 2 спосіб

// inputEl.addEventListener(
//   'input',
//   () => (textEl.style.fontSize = inputEl.value + 'px')
// );

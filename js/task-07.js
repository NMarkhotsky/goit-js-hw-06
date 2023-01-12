const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

//* 1 спосіб
textEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener(
  'input',
  (event) => (textEl.style.fontSize = `${event.currentTarget.value}px`)
);

//* 2 спосіб
// textEl.style.fontSize = inputEl.value + 'px';

// inputEl.addEventListener('input', OnChangeSizeText);

// function OnChangeSizeText() {
//   textEl.style.fontSize = inputEl.value + 'px';
// }

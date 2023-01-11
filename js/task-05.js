const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

//* 1й спосіб
inputEl.addEventListener('input', changeOutput);

function changeOutput(event) {
  if (event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
}

//* 2й спосіб
// inputEl.addEventListener('input', (event) => {
//   if (event.currentTarget.value === '') {
//     outputEl.textContent = 'Anonymous';
//   } else {
//     outputEl.textContent = event.currentTarget.value;
//   }
// });

//* 3й спосіб тернарник
// inputEl.addEventListener('input', (event) => {
//   event.currentTarget.value === ''
//     ? (outputEl.textContent = 'Anonymous')
//     : (outputEl.textContent = event.currentTarget.value);
// });

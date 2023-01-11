const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1;
});

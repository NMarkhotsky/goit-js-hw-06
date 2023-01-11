const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementCounter = decrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1;
});

const onIncrementCounter = incrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1;
});

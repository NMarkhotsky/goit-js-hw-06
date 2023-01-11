const color = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

// 1й спосіб
btnChangeColor.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
  document.body.style.backgroundColor = color.textContent = getRandomHexColor();
}

// 2й спосіб
// btnChangeColor.addEventListener('click', () => {
//   document.body.style.backgroundColor = color.textContent = getRandomHexColor();
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

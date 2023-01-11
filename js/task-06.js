const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

// Функція для зміни класу
function inputChangeClass(classOne, classTwo) {
  input.classList.add(classOne);
  input.classList.remove(classTwo);
}
//* 1й спосіб
function onInputBlur(event) {
  if (event.currentTarget.value.length.toString() === input.dataset.length) {
    inputChangeClass('valid', 'invalid');
  } else {
    inputChangeClass('invalid', 'valid');
  }
}

//* 2й спосіб тернарник
// function onInputBlur(event) {
//   event.currentTarget.value.length.toString() === input.dataset.length
//     ? inputChangeClass('valid', 'invalid')
//     : inputChangeClass('invalid', 'valid');
// }

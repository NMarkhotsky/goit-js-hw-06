function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};
let boxesSize = 30;

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const counterBox = Number((amount.currentTarget.value = refs.input.value));

  for (let i = 0; i < counterBox; i++) {
    boxesSize += 10;

    const newBox = document.createElement('div');
    newBox.classList.add('new-box');
    newBox.style.marginTop = 5 + 'px';
    newBox.style.width = boxesSize + 'px';
    newBox.style.height = boxesSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxes.append(newBox);
  }
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const newBox = document.querySelectorAll('.new-box');

  for (const allBoxes of newBox) {
    refs.boxes.removeChild(allBoxes);
    boxesSize = 30;
  }
}

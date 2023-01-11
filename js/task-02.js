const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');

const makeIngredientEl = (el) => {
  return el.map((el) => {
    const elementOfIngrediets = document.createElement('li');
    elementOfIngrediets.classList.add('item');
    elementOfIngrediets.textContent = el;

    return elementOfIngrediets;
  });
};

const elements = makeIngredientEl(ingredients);
ingredientEl.append(...elements);

console.log(ingredientEl);

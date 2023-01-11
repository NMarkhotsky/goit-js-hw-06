const categoryEl = document.querySelector('#categories').children;
console.log('Number of categories:', categoryEl.length);

[...categoryEl].forEach((item) => {
  const categoryTitle = item.querySelector('h2');
  console.log('Category:', categoryTitle.textContent);

  const categoryElCount = item.querySelectorAll('li').length;
  console.log('Elements:', categoryElCount);
});

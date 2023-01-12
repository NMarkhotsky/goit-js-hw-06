// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('Всі поля повинні бути заповнені.');
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   // console.log({
//   //   [email.getAttribute('name')]: email.value,
//   //   [password.getAttribute('name')]: password.value,
//   // });

//   event.currentTarget.reset();
// }

// //! 2
const form = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[type=email]');
const inputPasswordEl = document.querySelector('[type=password]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.email = inputEmailEl.value;
  formData.password = inputPasswordEl.value;

  if (formData.email === '' || formData.password === '') {
    return alert('Всі поля повинні бути заповнені.');
  }

  console.log(formData);
  event.currentTarget.reset();
}

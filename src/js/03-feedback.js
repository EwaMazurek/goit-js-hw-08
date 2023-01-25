const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
let formObject = {};

const save = (key, value) => {
  const serializedState = JSON.stringify(value);
  localStorage.setItem(key, serializedState);
};

const load = key => {
  const serializedState = localStorage.getItem(key);
  if (serializedState === null) return undefined;
  else {
    formObject = JSON.parse(serializedState);
    email.value = formObject.email;
    message.value = formObject.message;
  }
};

load('feedback-form-state');

form.addEventListener(
  'input',
  throttle(() => {
    formObject.email = email.value;
    formObject.message = message.value;
    save('feedback-form-state', formObject);
  }, 500)
);

form.addEventListener('submit', e => {
  if (email.value === '' || message.value === '')
    alert('Fill in both email and message fields!');
  else {
    e.preventDefault();
    console.log(formObject);
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
});

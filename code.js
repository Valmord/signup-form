 const hedgehogs = [
  "African Pygmy Hedgehog",
  "Algerian Hedgehog",
  "Egyptian Long-Eared Hedgehog",
  "Indian Long-Eared Hedgehog",
  "European Hedgehog",
  "Southern White-Breasted Hedgehog",
  "Northern White-Breasted Hedgehog",
  "Amur Hedgehog",
  "Somali Hedgehog",
  "Southern African Hedgehog",
  "Daurian Hedgehog",
  "Hugh's Hedgehog",
  "Desert Hedgehog",
  "Indian Hedgehog",
  "Brandt's Hedgehog",
  "Gaoligong Forest Hedgehog",
  "Bare-Bellied Hedgehog"
]

const hSelectInput = document.querySelector('#hedgehog');

function addHedgehogOpt(hedgehog) {
  const opt = document.createElement('option');
  opt.value = hedgehog;
  opt.textContent = hedgehog;
  hSelectInput.appendChild(opt);
}

hedgehogs.forEach( hedgehog => {
  addHedgehogOpt(hedgehog);
})

// Set to best hedgehog :)
hSelectInput.childNodes[3].selected = true;


const form = document.querySelector('form');
form.addEventListener('submit', event => {
  console.log(event);
})

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

const submitBut = document.querySelector('button');
submitBut.addEventListener('click', e => {

  if (!firstNameInput.checkValidity()) {
    firstNameInput.nextElementSibling.textContent = `Please enter a name between ${firstNameInput.getAttribute('minlength')} and ${firstNameInput.getAttribute('maxlength')} characters`;
  } else {
    firstNameInput.nextElementSibling.textContent = '';
  }

  if (!lastNameInput.checkValidity()) {
    lastNameInput.nextElementSibling.textContent = `Please enter a name between ${lastNameInput.getAttribute('minlength')} and ${lastNameInput.getAttribute('maxlength')} characters`;
  } else {
    lastNameInput.nextElementSibling.textContent = '';
  }
  
  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'Please enter valid email like john.doe@ILoveHedgehogs.com'
  } else {
    emailInput.nextElementSibling.textContent = '';
  }
  
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.nextElementSibling.textContent = 'Passwords must match';
  } else {
    passwordInput.nextElementSibling.textContent = ''
  }
})

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener( 'keyup', () => {
    if (input.checkValidity()){
      if (input === passwordInput || input === confirmPasswordInput) {
        if (passwordInput.value !== confirmPasswordInput.value) return;
        passwordInput .nextElementSibling.textContent = '';
      } else input.nextElementSibling.textContent = '';
    }
  })
})
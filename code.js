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
const colors = [
  'red',
  'blue',
  'yellow',
  'pink',
  'purple',
  'white',
  'indigo',
  'green',
  'orange',
  'gray',
];

const setColor = function (color) {
  document.body.style.backgroundColor = color;
  document.querySelector('#current-color').innerHTML = color;

  const currentActiveButton = document.querySelector('button.active');
  if (currentActiveButton !== null) {
    currentActiveButton.classList.remove('active');
  }
  document.querySelector(`button[data-color=${color}]`).classList.add('active');
};

colors.forEach(color => {
  const button = document.createElement('button');
  document.querySelector('div.colors').appendChild(button);
  button.style.backgroundColor = color;
  button.setAttribute('data-color', color);

  button.onclick = function () {
    setColor(color);
  };
});

document.body.onload = function () {
  const rndIndex = Math.floor(Math.random() * colors.length);
  const color = colors[rndIndex];
  setColor(color);
};

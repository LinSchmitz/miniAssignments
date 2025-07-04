const form = document.querySelector('form');

const calcBmi = function (height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  return (result = result.toFixed(2)); //2 float
};

const clearResult = function () {
  document.querySelector('#result').innerHTML = '';
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearResult();

  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  if (height.trim() === '' || weight.trim() === '') {
    alert('input the right values');
    return;
  }

  //convert to number
  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert('input the right values');
    return;
  }

  if (height < 0 || weight < 0) {
    alert('input the right values');
    return;
  }

  document.querySelector('#result').innerHTML = calcBmi(height, weight);
});

document.querySelector('input#height').addEventListener('keydown', clearResult);

document.querySelector('input#weight').addEventListener('keydown', clearResult);

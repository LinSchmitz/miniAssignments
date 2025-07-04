const input = document.querySelector('#filter');
const button = document.querySelector('.btn');

const API_URL = 'https://restcountries.com/v3.1/all';

const getItems = async function () {
  const cashItems = localStorage.getItem('items');
  if (cashItems !== null) {
    items = JSON.parse(cashItems);
    console.log('cashItems !== null');
    console.log(items);
  } else {
    request = await fetch(API_URL);
    items = await request.json();
    console.log('cashItems === null');
    console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
  }
  return items;
};

const showItems = async function (items = null) {
  document.querySelector('.items').innerHTML = '';
  try {
    if (items === null) {
      items = await getItems();
    }

    for (const item of items) {
      const flags = item.flags.png;
      const itemName = item.altSpellings[1];
      const capital = item.capital;

      // console.log(symbol, price, img);
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('col-2');
      itemContainer.classList.add('item');

      //flag
      const image = document.createElement('img');
      image.src = flags;
      image.setAttribute('alt', itemName);

      //item name
      const name = document.createElement('h3');
      name.innerHTML = itemName;

      //item capital
      const capitalName = document.createElement('h3');
      capitalName.innerHTML = capital;

      itemContainer.appendChild(image);
      itemContainer.appendChild(name);
      itemContainer.appendChild(capitalName);
      document.querySelector('.items').appendChild(itemContainer);
    }
    return items;
  } catch (err) {
    //temp error handling
    console.error(`${err} 🐱‍🐉`);
    throw err;
  }
};

//IIFE
(async function () {
  const items = await showItems();
  let timeout;
  input.addEventListener('keyup', e => {
    window.clearTimeout(timeout);
    timeout = setTimeout(() => {
      // console.log(1);
      const value = e.target.value.toLowerCase();
      const filteredItems = items.filter(item => {
        const name = `${item.altSpellings[1]}`;

        return name.toLowerCase().indexOf(value) > -1;
      });
      // console.log(filteredItems);
      showItems(filteredItems);
    }, 500);
  });
})();

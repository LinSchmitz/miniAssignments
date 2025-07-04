const container = document.createElement('ol');
const items = document.querySelector('.items');
const form = document.querySelector('form');

items.appendChild(container);

let arrItems = localStorage.getItem('todo-items');
arrItems === null ? (arrItems = []) : (arrItems = JSON.parse(arrItems));

const createRow = data => {
  const row = document.createElement('li');
  const title = document.createElement('h3');
  title.innerHTML = data.value;
  title.onclick = () => {
    const value = prompt('Enter new value:');
    title.innerHTML = value;
    data.value = value;
    sync();
  };

  //delete Bottun
  const deletebutton = document.createElement('button');
  deletebutton.classList.add('delete');
  deletebutton.onclick = () => {
    //FIXME: dakhele modal ino anjam bedam
    if (confirm('Delete this row?')) {
      row.remove();
      arrItems = arrItems.filter(item => {
        return item.id !== data.id;
      });
      sync();
    }
  };

  row.appendChild(title);
  row.appendChild(deletebutton);
  container.appendChild(row);
};

for (const item of arrItems) {
  console.log(item);
  createRow(item);
  // add items to array
}

form.onsubmit = e => {
  e.preventDefault();

  const value = document.querySelector('.form-control').value;

  if (value.trim() === '') return;

  const id = Math.floor(Math.random() * 1000) + 1;
  const data = { id, value };
  arrItems.push(data);
  sync();

  createRow(data);
};

const sync = () => {
  localStorage.setItem('todo-items', JSON.stringify(arrItems));
};

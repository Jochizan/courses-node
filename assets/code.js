const d = document;
const w = window;
const n = navigator;

const $addButton = d.querySelector('.addButton');
const $input = d.querySelector('.input');
const $container = d.querySelector('.container');

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = d.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = 'text';

    let itemBox = d.createElement('div');
    itemBox.classList.add('item');

    let editButton = d.createElement('button');
    editButton.innerHTML = 'EDIT';
    editButton.classList.add('editButton');

    let removeButton = d.createElement('button');
    removeButton.innerHTML = 'REMOVE';
    removeButton.classList.add('removeButton');

    $container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener('click', () => this.edit(input));

    removeButton.addEventListener('click', () =>
      this.remove(itemBox, input.value)
    );
  }

  async edit(input) {
    const newInput = prompt('Enter new msg:', input.value);
    if (newInput !== null) {
      input.value = newInput;
      /*     
			await fetch('/api/modify', {
				method: 'POST',
				body: JSON.stringify({ old: input.value, new: newInput }),
				headers: {
					'Content-Type': 'application/json'
				}
			}); 
			*/
    }
  }

  async remove(item, value) {
    $container.removeChild(item);
    /*     
		await fetch('/api/delete', {
      method: 'POST',
      body: JSON.stringify({ record: value }),
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
		*/
  }
}

async function check() {
  if ($input.value != '') {
    new Item($input.value);
    /* 
    await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({ record: $input.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
		*/
    $input.value = '';
  }
}

async function boot() {
  const records = await fetch('/api/get').then((t) => t.json());
  records.forEach(({ record }) => {
    new Item(record);
  });
}

boot();

$addButton.addEventListener('click', check);

w.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    check();
  }
});

const ul = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inputValue = input.value;
    input.value = '';

    const newList = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    newList.appendChild(span);
    span.textContent = inputValue;

    newList.appendChild(deleteButton);
    deleteButton.textContent = 'Delete';
    ul.appendChild(newList);

    deleteButton.addEventListener('click', () => {ul.removeChild(newList);});

    input.focus();
});
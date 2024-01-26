const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    //element.classList - добавляет или удаляет классы для елемента
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить'; 

    deleteButton.addEventListener('click', () => {
        //parent.removeChild(element) - удаляет указанный элемент(element) из родителя (parent)
        list.removeChild(newItem)
    })
    //Добавим кнопку
    newItem.appendChild(deleteButton);
    list.appendChild(newItem)

    nameInput.value = '';
})
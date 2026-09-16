let todoList = document.querySelector('ul');

let addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    let newTask = document.getElementById('newTask').value;
    if (newTask.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = newTask;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        document.getElementById('newTask').value = '';
    }
});


function addTodoItem() {
    const input = document.getElementById('todoInput').value;
    const newItem = document.createElement('li');
    newItem.textContent = input;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        newItem.remove();
    });

    newItem.appendChild(deleteButton);
    document.getElementById('todoList').appendChild(newItem);
}

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

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);


// validate form 
function validateForm() {
    const email = document.getElementById('emailInput').value;
    const name = document.getElementById('nameInput').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "") {
        alert("All fields are required!");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Function 
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    // Condition
    if (newTodoInput.value !== '') {
        const li = document.createElement('li');
        li.textContent = newTodoInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';  // Assign Delete Value to Button
        
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        newTodoInput.value = '';
    }
}

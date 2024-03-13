let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todo);
        saveTodos();
        displayTodos(todos);
        todoInput.value = '';
    }
}

function displayTodos(todosToShow) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todosToShow.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleComplete(${todo.id})" ${todo.completed ? 'checked' : ''}>
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button id="d" onclick="deleteTodo(${todo.id})">Delete</button>
            <button id="u" onclick="updateTodo(${todo.id})">Update</button>
        `;
        todoList.appendChild(listItem);
    });
}

function toggleComplete(todoId) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed;
        displayTodos(todos);
    }
}

function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    saveTodos();
    displayTodos(todos);
}

function updateTodo(todoId) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        const newText = prompt('Enter new todo text:');
        if (newText !== null) {
            todos[todoIndex].text = newText;
            saveTodos();
            displayTodos(todos);
        }
    }
}

function filterTodos(category) {
    let filteredTodos = [];
    if (category === 'all') {
        filteredTodos = todos;
    } else if (category === 'complete') {
        filteredTodos = todos.filter(todo => todo.completed);
    } else if (category === 'incomplete') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (category === 'continue') {
        filteredTodos = todos.filter(todo => !todo.completed);
    }
    displayTodos(filteredTodos);
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        displayTodos(todos);
    }
}

loadTodos();
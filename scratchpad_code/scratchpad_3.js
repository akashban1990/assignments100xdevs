const Todo = require('../01-js/hard/todo-list');

let todo = new Todo();

todo.add('Task 2');
todo.add('Task 3');
todo.add('Task 4');
todo.update(3,'Some task');


console.log(todo.getAll());
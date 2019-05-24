import React from 'react';
import Todo from './todo.test';
import { todoState } from '../reducers/todo.reducer';

const TodoList = ({ todos, toggleTodo }: { todos: todoState[], toggleTodo: Function }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

export default TodoList;
import React, { Component } from 'react';
import Todo from './todo.test';
import { todoStoreType } from '../reducers/todo.reducer';

const TodoList = ({ todos, toggleTodo }: { todos: todoStoreType[], toggleTodo: Function }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

export default TodoList;
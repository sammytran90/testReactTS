import React, { Component } from 'react';

interface TodoTestPropsType {
    // key: number,
    onClick: Function,
    completed: boolean,
    text?: string
}

const Todo = ({ onClick, completed, text }: TodoTestPropsType) => (
    <li
        onClick={event => onClick(event)}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

export default Todo;
import React from 'react'
import { connect } from 'react-redux'
import { AddTodoAction } from '../actions'

const AddTodo = ({ dispatch }: { dispatch: any }) => {
    let input: any;

    return (
        <div>
            <form
                onSubmit={e => {
                    console.log(input.value);
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }                    
                    dispatch(AddTodoAction(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
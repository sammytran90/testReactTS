import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList.test';
import { VisibilityFilters } from '../actions'
import { todoStoreType } from '../reducers/todo.reducer'

const getVisibleTodos = (todos: todoStoreType[], filter: string) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state: { todos: todoStoreType[], visibilityFilter: string }) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Function) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
import { connect } from 'react-redux'
import { ToogleTodoAction } from '../actions'
import TodoList from '../components/TodoList.test';
import { VisibilityFilters } from '../actions'
import { todoState } from '../reducers/todo.reducer'
import { filterState } from '../reducers/visibilityFilter.reducer';
const getVisibleTodos = (todos: todoState[], filter: filterState) => {
    // console.log(filter);
    switch (filter.filter) {
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

const mapStateToProps = (state: { todos: todoState[], visibilityFilter: filterState }) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Function) => ({
    toggleTodo: (id: number) => dispatch(ToogleTodoAction(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)